// Y.use("node","squarespace-gallery-ng","squarespace-image-loader",
//     function(a){
//         window.Site=Singleton.create(
//             {ready:function()
//                 {this.thumbnails=this.slideshow=null;
//                 a.on("domready",this.initialize,this);
//                 a.one(window).on("resize",function(){this.checkHeaderHeight();this.setSidebarFixed()},this)},

//             initialize:function(){this.setupNavigation();
//             this.setSidebarFixed();
//             a.one("body.collection-type-gallery")&&(this.setupGalleries(),this.checkHeaderHeight());
//             this.setupTweakHandlers();
//             this.handleAnnouncementBar();