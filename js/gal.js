$(document).ready(function() {
    $('.btn').click(function() {
      const index = $(this).index();
      $('.gallery').removeClass('active');
      $('.gallery').eq(index).addClass('active');
    });

    $('.slide-btn').click(function() {
      const index = $(this).index();
      const galleryIndex = $(this).closest('.gallery').index();
      $('.gallery').eq(galleryIndex).find('.slide').removeClass('active');
      $('.gallery').eq(galleryIndex).find('.slide').eq(index).addClass('active');
    });

    $('.prev-btn').click(function() {
      const gallery = $(this).closest('.gallery');
      const slides = gallery.find('.slide');
      const currentSlide = gallery.find('.slide.active');
      let prevSlide;

      if (currentSlide.index() === 0) {
        prevSlide = slides.last();
      } else {
        prevSlide = currentSlide.prev('.slide');
      }

      currentSlide.removeClass('active');
      prevSlide.addClass('active');
    });

    $('.next-btn').click(function() {
      const gallery = $(this).closest('.gallery');
      const slides = gallery.find('.slide');
      const currentSlide = gallery.find('.slide.active');
      let nextSlide;

      if (currentSlide.index() === slides.length - 1) {
        nextSlide = slides.first();
      } else {
        nextSlide = currentSlide.next('.slide');
      }

      currentSlide.removeClass('active');
      nextSlide.addClass('active');
    });
  });