// pages/post/post.js
Page({
    data: {
       comment: '',
    },
formSubmitToBaaS: function(e) {
   let description = e.detail.value.comment;
   let name = e.detail.value.place;
   let image = this.data.image.path;
   let user_id = this.data.user.id;
   let data = {name, description, image, user_id}
   let City = new wx.BaaS.TableObject("city")
   let MyRecord = City.create();
   MyRecord.set(data).save().then (res =>{
      wx.navigateTo({
        url: '../index/index',
      })
   })

 },

 submitPhoto: function() {
   wx.chooseImage({
      success: (res) => {
        let MyFile = new wx.BaaS.File()
        let fileParams = {filePath: res.tempFilePaths[0]}
        let metaData = {categoryName: 'SDK'}
    
        MyFile.upload(fileParams, metaData).then(res => {
          let data = res.data  
          console.log(data)
          this.setData({image: data})
        }, err => {
          // HError 对象
        })
      }
    })
 },
 getUserInformation: function() {
  wx.BaaS.auth.loginWithWechat().then(user => {
     this.setData({user})
    })
},
 onLoad: function() {
  this.getUserInformation();
 }
})