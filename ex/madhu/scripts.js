/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a(document).on("cycle-bootstrap",function(a,b,c){"carousel"===b.fx&&(c.getSlideIndex=function(a){var b=this.opts()._carouselWrap.children(),c=b.index(a);return c%b.length},c.next=function(){var a=b.reverse?-1:1;b.allowWrap===!1&&b.currSlide+a>b.slideCount-b.carouselVisible||(b.API.advanceSlide(a),b.API.trigger("cycle-next",[b]).log("cycle-next"))})}),a.fn.cycle.transitions.carousel={preInit:function(b){b.hideNonActive=!1,b.container.on("cycle-destroyed",a.proxy(this.onDestroy,b.API)),b.API.stopTransition=this.stopTransition;for(var c=0;c<b.startingSlide;c++)b.container.append(b.slides[0])},postInit:function(b){var c,d,e,f,g=b.carouselVertical;b.carouselVisible&&b.carouselVisible>b.slideCount&&(b.carouselVisible=b.slideCount-1);var h=b.carouselVisible||b.slides.length,i={display:g?"block":"inline-block",position:"static"};if(b.container.css({position:"relative",overflow:"hidden"}),b.slides.css(i),b._currSlide=b.currSlide,f=a('<div class="cycle-carousel-wrap"></div>').prependTo(b.container).css({margin:0,padding:0,top:0,left:0,position:"absolute"}).append(b.slides),b._carouselWrap=f,g||f.css("white-space","nowrap"),b.allowWrap!==!1){for(d=0;d<(void 0===b.carouselVisible?2:1);d++){for(c=0;c<b.slideCount;c++)f.append(b.slides[c].cloneNode(!0));for(c=b.slideCount;c--;)f.prepend(b.slides[c].cloneNode(!0))}f.find(".cycle-slide-active").removeClass("cycle-slide-active"),b.slides.eq(b.startingSlide).addClass("cycle-slide-active")}b.pager&&b.allowWrap===!1&&(e=b.slideCount-h,a(b.pager).children().filter(":gt("+e+")").hide()),b._nextBoundry=b.slideCount-b.carouselVisible,this.prepareDimensions(b)},prepareDimensions:function(b){var c,d,e,f,g=b.carouselVertical,h=b.carouselVisible||b.slides.length;if(b.carouselFluid&&b.carouselVisible?b._carouselResizeThrottle||this.fluidSlides(b):b.carouselVisible&&b.carouselSlideDimension?(c=h*b.carouselSlideDimension,b.container[g?"height":"width"](c)):b.carouselVisible&&(c=h*a(b.slides[0])[g?"outerHeight":"outerWidth"](!0),b.container[g?"height":"width"](c)),d=b.carouselOffset||0,b.allowWrap!==!1)if(b.carouselSlideDimension)d-=(b.slideCount+b.currSlide)*b.carouselSlideDimension;else for(e=b._carouselWrap.children(),f=0;f<b.slideCount+b.currSlide;f++)d-=a(e[f])[g?"outerHeight":"outerWidth"](!0);b._carouselWrap.css(g?"top":"left",d)},fluidSlides:function(b){function c(){clearTimeout(e),e=setTimeout(d,20)}function d(){b._carouselWrap.stop(!1,!0);var a=b.container.width()/b.carouselVisible;a=Math.ceil(a-g),b._carouselWrap.children().width(a),b._sentinel&&b._sentinel.width(a),h(b)}var e,f=b.slides.eq(0),g=f.outerWidth()-f.width(),h=this.prepareDimensions;a(window).on("resize",c),b._carouselResizeThrottle=c,d()},transition:function(b,c,d,e,f){var g,h={},i=b.nextSlide-b.currSlide,j=b.carouselVertical,k=b.speed;if(b.allowWrap===!1){e=i>0;var l=b._currSlide,m=b.slideCount-b.carouselVisible;i>0&&b.nextSlide>m&&l==m?i=0:i>0&&b.nextSlide>m?i=b.nextSlide-l-(b.nextSlide-m):0>i&&b.currSlide>m&&b.nextSlide>m?i=0:0>i&&b.currSlide>m?i+=b.currSlide-m:l=b.currSlide,g=this.getScroll(b,j,l,i),b.API.opts()._currSlide=b.nextSlide>m?m:b.nextSlide}else e&&0===b.nextSlide?(g=this.getDim(b,b.currSlide,j),f=this.genCallback(b,e,j,f)):e||b.nextSlide!=b.slideCount-1?g=this.getScroll(b,j,b.currSlide,i):(g=this.getDim(b,b.currSlide,j),f=this.genCallback(b,e,j,f));h[j?"top":"left"]=e?"-="+g:"+="+g,b.throttleSpeed&&(k=g/a(b.slides[0])[j?"height":"width"]()*b.speed),b._carouselWrap.animate(h,k,b.easing,f)},getDim:function(b,c,d){var e=a(b.slides[c]);return e[d?"outerHeight":"outerWidth"](!0)},getScroll:function(a,b,c,d){var e,f=0;if(d>0)for(e=c;c+d>e;e++)f+=this.getDim(a,e,b);else for(e=c;e>c+d;e--)f+=this.getDim(a,e,b);return f},genCallback:function(b,c,d,e){return function(){var c=a(b.slides[b.nextSlide]).position(),f=0-c[d?"top":"left"]+(b.carouselOffset||0);b._carouselWrap.css(b.carouselVertical?"top":"left",f),e()}},stopTransition:function(){var a=this.opts();a.slides.stop(!1,!0),a._carouselWrap.stop(!1,!0)},onDestroy:function(){var b=this.opts();b._carouselResizeThrottle&&a(window).off("resize",b._carouselResizeThrottle),b.slides.prependTo(b.container),b._carouselWrap.remove()}}}(jQuery);

/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);


/* meanMenu */
(function($){"use strict";$.fn.meanmenu=function(options){var defaults={meanMenuTarget:jQuery(this),meanMenuContainer:'header .place-nav',meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"1023",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!0,meanDisplay:"block",removeElements:""};options=$.extend(defaults,options);var currentWidth=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var meanMenu=options.meanMenuTarget;var meanContainer=options.meanMenuContainer;var meanMenuClose=options.meanMenuClose;var meanMenuCloseSize=options.meanMenuCloseSize;var meanMenuOpen=options.meanMenuOpen;var meanRevealPosition=options.meanRevealPosition;var meanRevealPositionDistance=options.meanRevealPositionDistance;var meanRevealColour=options.meanRevealColour;var meanScreenWidth=options.meanScreenWidth;var meanNavPush=options.meanNavPush;var meanRevealClass=".meanmenu-reveal";var meanShowChildren=options.meanShowChildren;var meanExpandableChildren=options.meanExpandableChildren;var meanExpand=options.meanExpand;var meanContract=options.meanContract;var meanRemoveAttrs=options.meanRemoveAttrs;var onePage=options.onePage;var meanDisplay=options.meanDisplay;var removeElements=options.removeElements;var isMobile=!1;if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/Blackberry/i))||(navigator.userAgent.match(/Windows Phone/i))){isMobile=!0}
if((navigator.userAgent.match(/MSIE 8/i))||(navigator.userAgent.match(/MSIE 7/i))){jQuery('html').css("overflow-y","scroll")}
var meanRevealPos="";var meanCentered=function(){if(meanRevealPosition==="center"){var newWidth=window.innerWidth||document.documentElement.clientWidth;var meanCenter=((newWidth/2)-22)+"px";meanRevealPos="left:"+meanCenter+";right:auto;";if(!isMobile){jQuery('.meanmenu-reveal').css("left",meanCenter)}else{jQuery('.meanmenu-reveal').animate({left:meanCenter})}}};var menuOn=!1;var meanMenuExist=!1;if(meanRevealPosition==="right"){meanRevealPos="right:"+meanRevealPositionDistance+";left:auto;"}
if(meanRevealPosition==="left"){meanRevealPos="left:"+meanRevealPositionDistance+";right:auto;"}
meanCentered();var $navreveal="";var meanInner=function(){if(jQuery($navreveal).is(".meanmenu-reveal.meanclose")){$navreveal.html(meanMenuClose);jQuery('body').addClass("mean-active")}else{$navreveal.html(meanMenuOpen);jQuery('body').removeClass("mean-active")}};var meanOriginal=function(){jQuery('.mean-bar,.mean-push').remove();jQuery(meanContainer).removeClass("mean-container");jQuery(meanMenu).css('display',meanDisplay);menuOn=!1;meanMenuExist=!1;jQuery(removeElements).removeClass('mean-remove')};var showMeanMenu=function(){var meanStyles="background:"+meanRevealColour+";color:"+meanRevealColour+";"+meanRevealPos;if(currentWidth<=meanScreenWidth){jQuery(removeElements).addClass('mean-remove');meanMenuExist=!0;jQuery(meanContainer).addClass("mean-container");jQuery('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+meanStyles+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var meanMenuContents=jQuery(meanMenu).html();jQuery('.mean-nav').html(meanMenuContents);if(meanRemoveAttrs){jQuery('nav.mean-nav ul, nav.mean-nav ul *').each(function(){if(jQuery(this).is('.mean-remove')){jQuery(this).attr('class','mean-remove')}else{jQuery(this).removeAttr("class")}
jQuery(this).removeAttr("id")})}
jQuery(meanMenu).before('<div class="mean-push" />');jQuery('.mean-push').css("margin-top",meanNavPush);jQuery(meanMenu).hide();jQuery(".meanmenu-reveal").show();jQuery(meanRevealClass).html(meanMenuOpen);$navreveal=jQuery(meanRevealClass);jQuery('.mean-nav ul').hide();if(meanShowChildren){if(meanExpandableChildren){jQuery('.mean-nav ul ul').each(function(){if(jQuery(this).children().length){jQuery(this,'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: '+meanMenuCloseSize+'">'+meanExpand+'</a>')}});jQuery('.mean-expand').on("click",function(e){e.preventDefault();if(jQuery(this).hasClass("mean-clicked")){jQuery(this).text(meanExpand);jQuery(this).prev('ul').slideUp(300,function(){})}else{jQuery(this).text(meanContract);jQuery(this).prev('ul').slideDown(300,function(){})}
jQuery(this).toggleClass("mean-clicked")})}else{jQuery('.mean-nav ul ul').show()}}else{jQuery('.mean-nav ul ul').hide()}
jQuery('.mean-nav ul li').first().addClass('mean-first');jQuery('.mean-nav ul li').last().addClass('mean-last');$navreveal.removeClass("meanclose");jQuery('body').removeClass("mean-active");jQuery($navreveal).click(function(e){e.preventDefault();if(menuOn===!1){$navreveal.css("text-align","center");$navreveal.css("text-indent","0");$navreveal.css("font-size",meanMenuCloseSize);jQuery('.mean-nav ul:first').slideDown();menuOn=!0}else{jQuery('.mean-nav ul:first').slideUp();menuOn=!1}
$navreveal.toggleClass("meanclose");meanInner();jQuery(removeElements).addClass('mean-remove')});if(onePage){jQuery('.mean-nav ul > li > a:first-child').on("click",function(){jQuery('.mean-nav ul:first').slideUp();menuOn=!1;jQuery($navreveal).toggleClass("meanclose").html(meanMenuOpen);jQuery('body').removeClass("mean-active")})}}else{meanOriginal()}};if(!isMobile){jQuery(window).resize(function(){currentWidth=window.innerWidth||document.documentElement.clientWidth;if(currentWidth>meanScreenWidth){meanOriginal()}else{meanOriginal()}
if(currentWidth<=meanScreenWidth){showMeanMenu();meanCentered()}else{meanOriginal()}})}
jQuery(window).resize(function(){currentWidth=window.innerWidth||document.documentElement.clientWidth;if(!isMobile){meanOriginal();if(currentWidth<=meanScreenWidth){showMeanMenu();meanCentered()}}else{meanCentered();if(currentWidth<=meanScreenWidth){if(meanMenuExist===!1){showMeanMenu()}}else{meanOriginal()}}});showMeanMenu()})}})(jQuery)

/* leanModal - Basic Modal 2 */
!function(e){e.fn.extend({leanModal:function(a){function o(a){e("#lean_overlay").fadeOut(200),e("body").css({overflow:"visible"}),e(a).css({display:"none"});var o=e("#lean_overlay iframe"),n=o.attr("src");o.attr("src",""),o.attr("src",n)}var n={top:"0",overlay:"rgba(0,0,0,0)",closeButton:".modal-close"},t=e("<div id='lean_overlay'></div>");return e("body").append(t),a=e.extend(n,a),this.each(function(){var n=a;e(this).click(function(a){e("body").css({overflow:"hidden"});var t=e(this).attr("href");e("#lean_overlay").click(function(){o(t)}),e(n.closeButton).click(function(){o(t)});e(t).outerHeight(),e(t).outerWidth();e("#lean_overlay").css({display:"flex",background:"rgba(0,0,0,.7)"}),e("#lean_overlay").fadeTo(200,n.overlay),e(t).appendTo("#lean_overlay").css({display:"block","z-index":1001,opacity:0}),e(t).fadeTo(200,1),a.preventDefault()})})}})}(jQuery);


/* get device */
function getOS(){var i=navigator.userAgent||navigator.vendor||window.opera;return i.match(/iPad/i)||i.match(/iPhone/i)||i.match(/iPod/i)?"iOS":i.match(/Android/i)?"Android":"unknown"}

/* retrive youtube video */
jQuery.fn.setupYoutube=function(){iframe=document.createElement("iframe"),iframe.setAttribute("frameborder","0"),iframe.setAttribute("allowfullscreen",""),iframe.setAttribute("width",this.attr("data-width")),iframe.setAttribute("height",this.attr("data-height")),iframe.setAttribute("src","https://www.youtube.com/embed/"+this.attr("data-embed")+"?rel=0&autoplay=1&playsinline=1&enablejsapi=1"),this.prepend(iframe);var e=iframe.height/iframe.width*100;iframe.style.position="absolute",iframe.style.top="0",iframe.style.left="0",iframe.style.right="0",iframe.width="100%",iframe.height="100%";var t=document.createElement("div");t.className="fluid-vid",t.style.width="100%",t.style.position="relative",t.style.paddingTop=e+"%",iframe.parentNode.insertBefore(t,iframe),t.appendChild(iframe)};

/* youtube lazy-load */
$(".youtube").each(function(){$(this).is(":empty")&&$(this).empty().append('<img alt="youtube thumbnail" class="thumbnail" src="https://img.youtube.com/vi/'+$(this).data("embed")+'/maxresdefault.jpg">'),$(this).on("click",function(){$(this).find(".thumbnail").remove();for(var t=0;t<$("iframe").length;t++)$("iframe")[t].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");$(this).addClass("active").setupYoutube()})});

/* tntvideos 1.3 */
!function(e){e.fn.extend({tntvideos:function(t){var i={playButton:".play",closeButton:".close",closeButtonString:null,animate:!0,offset:e("header").outerHeight(),bodyPlaying:null,mobileWidth:900,mobileAppendPlay:null,onPlay:function(){},onClose:function(){}};t=e.extend(i,t);var a=this.length-1;return this.each(function(i){var l=t,s=l.closeButton.replace(/\./g,""),m=e(this),u=m.data("player");if(e(window).width()>l.mobileWidth&&("vimeo-solo"==u&&"static"==m.data("mode")||"youtube"!=u&&(e(this).find(".thumbnail").remove(),o(m))),e(window).width()<l.mobileWidth&&(null==l.mobileAppendPlay||e(this).data("mobile-append-play")?e(this).data("mobile-append-play")?e(this).find(l.playButton).appendTo(e(this).find(e(this).data("mobile-append-play"))):e(this).find(l.playButton).appendTo(e(this).find("[data-embed]")):e(this).find(l.playButton).appendTo(e(this).find(l.mobileAppendPlay))),null!=l.closeButtonString)var r=l.closeButtonString;else r='<i class="icon-plus"></i> Close Video';if(e(this).on("click",l.playButton,function(){var i=m.data("player");null!=l.bodyPlaying&&e("body").addClass(l.bodyPlaying.replace(/\./g,"")),m.find(l.playButton).hide(),"vimeo"==i?(m.find("video").remove(),d(m,s,r)):"youtube"==i?(m.find(".thumbnail").hide(),function(t,i,a){t.addClass("playing").find("[data-embed]").append('<a class="'+i+'">'+a+"</a>"),t.find(".thumbnail").hide();for(var o=0;o<e("iframe").length;o++)e("iframe")[o].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");t.addClass("active").find("[data-embed]").setupYoutube()}(m,s,r)):(i="vimeo-solo")&&("swap"==m.data("mode")?(m.find("video").remove(),m.find(".thumbnail").hide(),d(m,s,r)):e(window).width()<l.mobileWidth||"static"==m.data("mode")?(m.find(".thumbnail").hide(),o(m),n(m,s,r)):n(m,s,r));for(var a=0;a<e("iframe").length;a++)e("iframe")[a].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");return e(window).width()>l.mobileWidth&&1==l.animate&&(console.log(l.offset),e("html, body").animate({scrollTop:m.offset().top+l.offset},1e3)),t.onPlay.call(this),!1}),e(this).on("click",l.closeButton,function(){var i=e(this).parents("[data-player]"),a=i.data("player");i.removeClass("playing"),i.find(l.closeButton).remove(),i.find(l.playButton).show(),i.find(".fluid-vid, iframe").remove(),null!=l.bodyPlaying&&e("body").removeClass(l.bodyPlaying.replace(/\./g,""));return"vimeo"==a?e(window).width()<t.mobileWidth||"static"==i.data("mode")?(i.find("video, iframe").remove(),i.find(".thumbnail").show()):o(i):"youtube"==a?i.find(".thumbnail").show():"vimeo-solo"==a&&(e(window).width()<t.mobileWidth||"static"==i.data("mode")?(i.find("video, iframe").remove(),i.find(".thumbnail").show()):"swap"==i.data("mode")?(i.find("video").remove(),o(i)):n(i,s,r,!0)),e(window).width()>l.mobileWidth&&1==l.animate&&e("html, body").animate({scrollTop:i.offset().top-l.offset},1e3),t.onClose.call(this),!1}),i==a)return!1});function o(e){e.find("[data-embed]").prepend('<video autoplay="true" muted="muted" loop="true" src="https://player.vimeo.com/external/'+e.data("vimeo")+'&profile_id=174"></video>')}function d(e,t,i){e.addClass("playing").find("[data-embed]").append('<a class="'+t+'">'+i+"</a>"),"swap"==e.data("mode")?function(e){var t=e.find("[data-embed]");console.log("is swap mobile"),e.find("[data-embed]").prepend('<video controls autoplay="true" src="https://player.vimeo.com/external/'+t.data("embed")+'&profile_id=174"></video>')}(e):(e.find("[data-embed]").setupYoutube(),e.find("video, .thumbnail").hide())}function n(e,t,i,a){var o=e.find("video");a?(e.removeClass("playing"),o.attr({controls:"false",muted:"true",loop:"true"}),o[0].muted=1,o[0].controls=0,o[0].play()):(e.addClass("playing").find("[data-embed]").append('<a class="'+t+'">'+i+"</a>").find(".thumbnail").hide(),o.attr({controls:"true",muted:"false",loop:"false"}),o[0].currentTime=0,o[0].muted=0,o[0].controls=1)}}})}(jQuery);

$(document).ready(function() {
	new WOW({mobile:false}).init();

	/* meannav */
	$('header #main-nav').meanmenu({
	  meanMenuContainer: '#header-contents',
	  meanScreenWidth: 1022,
	  meanDisplay:'flex'
	});

	$("a[rel*=leanModal]").leanModal();

	//append to titles
	$(".page h1:first-of-type, #append").appendTo($("#page-title"));

	//HEADER SCROLL
	var theWindow = $(window),
	header = $("header");
	headerBottom = header.outerHeight();
	if(window.location.hash && theWindow.width() >= "1023") {
	$("body").addClass("fix-nav").css('padding-top', headerBottom);
	}
	theWindow.on("scroll", function(){
		$("body").addClass("scrolled");
		if(theWindow.scrollTop() >= headerBottom && theWindow.width() >= "1023") { //scroll nav on mobile
		  $("body").addClass("fix-nav").css('padding-top', headerBottom); //prevent page jump 
		} else if(theWindow.scrollTop() <= headerBottom) {
		  $("body").removeClass("fix-nav").css('padding-top','0');
		  $("body").removeClass("scrolled");
		} 
	});  

	//FAQs
	$(".page-faq h3").addClass("faq-btn").each(function(){ //auto wrap
	$(this).nextUntil('h3').wrapAll('<div class="faq-content">').parent().add(this);
	});
	$(".page-faq").on("click","h3:not(.active)",function(){
	$(".page-faq .faq-btn").removeClass("active");
	$(".page-faq .faq-content").hide();
	$(this).addClass("active").nextUntil("h3").fadeIn("fast");
	}); 
	$(".page-faq").on("click","h3.active",function(){
	$(this).removeClass("active");
	$(".page-faq .faq-content").hide();
	});

	//PAGE-DIVIDER 
	$.when( setupServices() ).done(function(){
	 	if (window.location.hash){ scrollToAnchor(window.location.hash); }
	});
	function scrollToAnchor(target){
		var target = target.substr(1),
		    $target = $("a[name='"+target+"']");
		$('html, body').stop().animate({
		    'scrollTop': $target.offset().top
		}, 300, 'swing', function () { //window.location.hash = target;
		});
	}
	function setupServices(){
		$(".page-divider h3, .page-divider h2").addClass("divider-title").each(function(){ //auto wrap
			var hasAnchor = $(this).prevAll("p:has(a[name])");
			$(this)
			.nextUntil('.divider-title')
			.addBack()
			.wrapAll('<div class="divider-body clearfix img-align">'); 		
		});	
		
		//move anchors to divider-body
		$(".page-divider a[name]").each(function(){              
		var getAnchor = $(this).parent(),
		  anchorTarget = $(this)
		    .parentsUntil(".page-divider")
		    .next()
		    .find(".divider-title").parent();
			getAnchor.prependTo(anchorTarget);
		});  	
	}  
	
	$("#banner[data-player]").tntvideos({		
		playButton: '.play-btn',
		closeButton: '.close',
		bodyPlaying: null,
		animate: false,
		mobileWidth: 900
		
	});	
	
	
	   
});


// On this particular site, we don't want videos to be so large. So I am commenting out this code. -LJH

// $(function () {    
//     //find videos and wrap
//     var iframes = document.getElementsByTagName('iframe');
//     for (var i = 0; i < iframes.length; i++) {
//         var iframe = iframes[i],
//             players = /www.youtube.com|player.vimeo.com/;
//         //videos embeded code MUST have a set WIDTH and HEIGHT
//         if (iframe.src.search(players) > 0) {
//             var videoRatio = (iframe.height / iframe.width) * 100;
//             iframe.style.position = 'absolute';
//             iframe.style.top = '0';
//             iframe.style.left = '0';
//             iframe.style.right = '0';
//             iframe.width = '100%';
//             iframe.height = '100%';
          
//             var wrap = document.createElement('div');
//             wrap.className = 'fluid-vid';
//             wrap.style.width = '100%';
//             wrap.style.position = 'relative';
//             wrap.style.paddingTop = videoRatio + '%';
//             var iframeParent = iframe.parentNode;
//             iframeParent.insertBefore(wrap, iframe);
//             wrap.appendChild(iframe);
//         }
//     }
