// slider about us company gallery

$('.company-gallery-wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
    prevArrow: $('.slick-pref'),
    nextArrow: $('.slick-next'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 640,
             
              settings: {
               
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 420,
              
              settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    
});


// slider production page

$('.production-gallery').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
    prevArrow: $('.slick-pref'),
    nextArrow: $('.slick-next'),
    responsive: [
            {
              breakpoint: 1024,
              settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 640,
             
              settings: {
               
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 420,
              
              settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    
});
