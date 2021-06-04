
// Functions
// Footer collapse nav
function footerCollapse() {
  var width = $(document).width();
  
  if (width < 991) {
    $('.sfn-footer__nav-title').click(function() {
      $(this).next().stop().slideToggle();
      $(this).toggleClass('active');
      console.log(this);
    });
  
    $('.sfn-footer__nav-inner').stop().hide();
  } else {
    $('.sfn-footer__nav-inner').stop().show();
  }
};

// Toggle button animation
function toggleAnimation() {
  $(".toggle-button").click(function() {
    var that = $(this);    
    if (that.hasClass("is-open")) {
      that.removeClass("is-open").addClass("is-closed");      
    } else {
      that.removeClass("is-closed").addClass("is-open");      
    }    
  });
}

// Changes on document ready
jQuery(document).ready(function($){
  toggleAnimation()
  footerCollapse();
});

// Resize function
$(window).resize(function() {
  footerCollapse();
});


// Truncate
new Cuttr('.sfn-news-boxes--featured h3, .sfn-box-video__content h3', { truncate: 'words', length: 6 });
new Cuttr('.sfn-news-box--medium-heading h3', { truncate: 'words', length: 8 });
new Cuttr('.sfn-news-box--big-heading h3', { truncate: 'words', length: 8 });
new Cuttr('.sfn-featured-newsbox__title h2', { truncate: 'words', length: 10 });
new Cuttr('.sfn-featured-newsbox__excerpt', { truncate: 'words', length: 38 });
new Cuttr('.truncate-excerpt', { truncate: 'words', length: 18 });
new Cuttr('.truncate-excerpt--long', { truncate: 'words', length: 27 });

//Show Submenu on when hover on main navigation links
var headerLink = $('.sfn-header-nav__inner ul li.dropdown a');
var submenuSection = $('.sfn-header-submenu'); 

// headerLink.click(function(){
//   submenuSection.toggle();
// });

