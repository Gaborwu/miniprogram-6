Page({
  data: {
   
  },

  FetchInformation: function () {
    let City = new wx.BaaS.TableObject("city")
    let query = new wx.BaaS.Query()
    City.setQuery(query).find().then(res => {
      let cities = res.data.objects;
      this.setData({cities});
    })
  },
  navigateToShow: function(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../show/show?id=${id}`,
    })
  },
  submitPost: function(res) {
    wx.navigateTo({
      url: '../post/post',
    })
  },

  onLoad: function (options) {
    this.FetchInformation();
  
  },
  
})
