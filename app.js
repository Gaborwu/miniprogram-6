App({
  onLaunch: function() {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment)

    let clientID = '4e2700812f54a06bb458';
    wx.BaaS.init(clientID)
    wx.BaaS.auth.loginWithWechat().then(user => {
      console.log(user);
    })
  }
})