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

   
    onLoad: function (options) {
        let id = options.id;
        this.fetchCity(id);
    },

})