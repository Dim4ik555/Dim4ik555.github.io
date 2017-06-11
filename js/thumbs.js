$(document).ready(function() {
  $('.img').magnificPopup({
    type: 'image',
    tLoading: 'Loading image...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    callbacks: {
      open: function() {
        $.magnificPopup.instance.goTo($('.thumbs a').index($('.active')))
      }
    },
    items: $('.thumbs a').map(function(i, e) {
      return {
        src: e.href,
        titleSrc: $(e).find('img').attr('alt')
      }
    }).get(),
    image: {
      cursor: null,
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.data.titleSrc
      }
    }
  });
  $('.thumbs a').click(function() {
    $('.thumbs a').removeClass('active');
    $(this).addClass('active');
    $('.img img').attr('src', $(this).attr('href'));
    return false;
  });
});
