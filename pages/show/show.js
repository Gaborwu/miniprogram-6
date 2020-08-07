// pages/show/show.js
Page({

    data: {

    },
 
    fetchCity: function (id) {
        let City = new wx.BaaS.TableObject('city')
        City.get(id).then(res => {
            let city = res.data;
            this.setData({city})
           
          })

    },
    getUserInformation: function() {
        wx.BaaS.auth.loginWithWechat().then(user => {
           this.setData({user})
          })
    },
    ReviewSubmit: function(e) {
        let review = e.detail.value.review;
        let city_id = this.data.id;
        let user_id = this.data.user.id;
        let Review = new wx.BaaS.TableObject("review")
        let MyRecord = Review.create()
        let data = {review, city_id, user_id}
        MyRecord.set(data).save().then(res => {
            this.fetchReview(city_id);
            wx.reLaunch({
              url: `../show/show?id=${city_id}`,
            })
          })
    },

    fetchReview: function (id) {
        let Review = new wx.BaaS.TableObject("review")
        let query = new wx.BaaS.Query()
        query.compare('city_id', '=', id);
        Review.setQuery(query).expand(['user_id']).find().then(res => {
            console.log(res)
            let review = res.data.objects;
            this.setData({review})
        })
    },

    onLoad: function (options) {
        let id = options.id;
        this.setData({id})
        this.fetchCity(id);
        this.fetchReview(id);
        this.getUserInformation();
    },
})