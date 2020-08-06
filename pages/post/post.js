// pages/post/post.js
Page({
    data: {
       comment: '',
    },
formSubmitToBaaS: function(e) {
    console.log(e)
   let description = e.detail.value.comment;
   
 },

 onLoad: function() {

 }
})