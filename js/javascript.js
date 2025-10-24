$('.toggle span, .tooltip_list .text, .tooltip .text').hide();
$(function(){
    $('.tooltip_list, .tooltip').click(function(){
        $($(this).children('span')).toggle();
        $('.text').not($(this).children()).hide();
    });
});

$('.hide').fadeOut(1200);

$(function(){
    $('.toggle h3:first-child').not('.toggle span h3').click(function(){
        $($(this).siblings()).toggle();
        $($(this).parent()).toggleClass("padding35");
        $($(this).parent().find('button')).toggleClass("see_less");
        $('.project_toggle button').not($(this).find('button')).removeClass("see_less").addClass("see_more");
        $('.project_toggle button').not($(this).find('button')).removeClass("see_less").addClass("see_more");
        $('.project_toggle span').not($(this).siblings()).hide();
        $('.toggle').not($(this).parent()).removeClass("padding35");
    });
});
$(function(){
    $('.toggle sup a').click(function(){
        $('.literature_cited_td span').show();
        $('.literature_cited_td').toggleClass("padding35");
        $('.literature_cited_td button').toggleClass("see_less");
    });
});

$(function(){
    $('.toggle p:first-child').not('.toggle span p').click(function(){
        $($(this).siblings()).toggle();
        $($(this).parent()).toggleClass("padding35");
        $($(this).parent().find('button')).toggleClass("see_less_faq");
        $('.table button').not($(this).find('button')).removeClass("see_less_faq").addClass("see_more_faq");
        $('.table button').not($(this).find('button')).removeClass("see_less_faq").addClass("see_more_faq");
        $('.table span').not($(this).siblings()).hide();
        $('.toggle').not($(this).parent()).removeClass("padding35");
    });
});




function tooltip(id) {
  var e = document.getElementById(id);
    if(e.style.display == 'table')
    e.style.display = 'none';
    else
    e.style.display = 'table';}
function hide(id) {
    document.getElementById(id).style.display = 'none';}

function tooltip_block(id) {
  var e = document.getElementById(id);
    if(e.style.display == 'block')
    e.style.display = 'none';
    else
    e.style.display = 'block';}

$( "a:has(img)" ).addClass( "opacity" );
$( "a:has(div)" ).addClass( "opacity" );
$( "a:has('.red_button')" ).removeClass( "opacity" ).addClass( "transparent_background" );

'use strict';
(function($) {
  var container = [];
  $('#gallery1').find('figure').each(function() {
    var $link = $(this).find('a'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption')
      };
    container.push(item);
  });
  $('#gallery1').find('a').click(function(event) {
    event.preventDefault();
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
        bgOpacity: 0.95,
        showHideOpacity: true
      };
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });
}(jQuery));


'use strict';
(function($) {
  var container = [];
  $('#gallery2').find('figure').each(function() {
    var $link = $(this).find('a'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption')
      };
    container.push(item);
  });
  $('#gallery2').find('a').click(function(event) {
    event.preventDefault();
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
        bgOpacity: 0.95,
        showHideOpacity: true
      };
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });
}(jQuery));


'use strict';
(function($) {
  var container = [];
  $('#gallery3').find('figure').each(function() {
    var $link = $(this).find('a'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption')
      };
    container.push(item);
  });
  $('#gallery3').find('a').click(function(event) {
    event.preventDefault();
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
        bgOpacity: 0.95,
        showHideOpacity: true
      };
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });
}(jQuery));


'use strict';
(function($) {
  var container = [];
  $('#gallery4').find('figure').each(function() {
    var $link = $(this).find('a'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption')
      };
    container.push(item);
  });
  $('#gallery4').find('a').click(function(event) {
    event.preventDefault();
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
        bgOpacity: 0.95,
        showHideOpacity: true
      };
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });
}(jQuery));






