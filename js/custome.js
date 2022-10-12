$('.it.fr').owlCarousel({loop: true, items: 1, dots: true, nav: false, autoplay:true})
$('.category-cnt').owlCarousel({loop: false, items: 6, dots: true, nav: true, autoplay:false,lazyLoad: 1, navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
responsive: {   
   0 : {
       items : 2   
   },
   // breakpoint from 768 up
   768 : {
       items: 4
   },
   1000 : {
      items: 5
   },
   1025: {
      items: 6
   }
}})
$('.sale-cnt').owlCarousel({loop: true, items: 5, dots: false, nav: false,margin: 10,
   responsive: {   
      0 : {
          items : 2      
      },
      // breakpoint from 768 up
      768 : {
          items: 4
      },
      1000 : {
         items: 5
      },
      1025: {
         items: 5
      }
   }})

$('.new').owlCarousel({loop: false, items:3, margin: 5, dots: true, nav: true, navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive : {
   
   0 : {
       items : 2   
   },
   // breakpoint from 768 up
   768 : {
       items: 2
   },
   1000 : {
      items:2
   },
   1025: {
      items: 3
   }
} })
$('.feature').owlCarousel({loop: false,items:3, margin: 5, dots: true, nav: true, navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
responsive: {   
   0 : {
       items : 2  
   },
   // breakpoint from 768 up
   768 : {
       items: 2
   },
   1025: {
      items: 3
   }
} })
$('.brand-cnt').owlCarousel({loop: false,items:6, margin: 5, dots: true, nav: true, navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
responsive: {   
   0 : {
       items : 2  
   },
   // breakpoint from 768 up
   768 : {
       items: 3
   },
   1000 : {
      items: 4
   },
   1025: {
      items: 6
   }
} })
$('.info-pro').owlCarousel({loop: true,items:3, margin: 5, dots: false, nav: false, navText: ['','<i class="fa fa-angle-right"></i>'],
responsive: {   
   0 : {
       items : 2   
   },
   // breakpoint from 768 up
   768 : {
       items: 2
   },
   1000 : {
      items: 3
   },
   1025: {
      items: 3
   }
} })
$('._sale').owlCarousel({loop: true,margin: 15, items: 5, dots: true, nav: false, autoplay:true,
   responsive: {   
      0 : {
          items : 2      
      },
      // breakpoint from 768 up
      768 : {
          items: 4
      },
      1000 : {
         items: 5
      },
      1025: {
         items: 5
      }
   }})

$('.pro-small-banner').owlCarousel({loop: true,margin: 15, items: 3, dots: false, nav: false, autoplay:true,
   responsive: {   
      0 : {
          items : 2
      },
      // breakpoint from 480 up
      480 : {
          items: 2
      },
      // breakpoint from 768 up
      768 : {
          items: 3
      },
      1000 : {
         items: 3
      },
      1025: {
         items: 3
      }
   }})
const resizeImage = (e, s) => { s = parseInt($(e).width()) * s; $(e).css({ height: s + "px" }) };
resizeImage(".product .pro_img .img", 9/10);
resizeImage(".pro-selling .small-banner .it-img", 170/660)

resizeImage("._advise_grid .it .img", 70/130)
resizeImage(".tips .bot .img", 1)
resizeImage(".tips .top .img", 1)
$('.ser-slider').owlCarousel({loop: true, dots: false, nav: false, items: 5, margin: 15, autoplay: true,
   responsive: {   
      0 : {
          items : 2
      },
      // breakpoint from 480 up
      480 : {
          items: 2
      },
      // breakpoint from 768 up
      768 : {
          items: 4
      },
      1000 : {
         items: 5
      },
      1025: {
         items: 5
      }
   }})
 $('.touch-menu').click(function(){
    $('.bg-black').toggleClass('active');
    $('.menu-mobile').addClass('active');
 })
 $('.bg-black').click(function(){
    $('.bg-black').removeClass('active');
    $('.menu-mobile').removeClass('active');
 })
 $('.hd-bot-cnt .left i').click(function(){
   $('.hd-bot-cnt .left .menu').addClass('active');
 })
 $(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;		
		var links = this.el.find('.link');		
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	
	var accordion = new Accordion($('#accordion'), false);
});
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;		
		var links = this.el.find('.link');		
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	
	var accordion = new Accordion($('#itemright'), false);
});
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;		
		var links = this.el.find('.link');		
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	
	var accordion = new Accordion($('#itemleft'), false);
});

$('.see-more').click(function(){
   $('.offer .offer-cnt').toggleClass('active');
})
if($(window).width() > 1250){
   resizeImage(".cate-product-cnt .banner-sale .img", 418/246)
   }

   $('.acc').click(function(){
      $('.login').addClass('active');
      $('.br-black').addClass('active');
   })
   $('.btn-exit').click(function(){
      $('.login').removeClass('active');
      $('.br-black').removeClass('active');
   })   
   $('.btn-register').click(function(){
      $('.register').addClass('active');
      $('.login').removeClass('active');
   })
   $('.exit').click(function(){
      $('.register').removeClass('active');
      $('.br-black').removeClass('active');
   })