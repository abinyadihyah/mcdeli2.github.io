      $(".slider-single").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        speed: 400,
        cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
      });

      $(".slider-nav")
        .on("init", function (event, slick) {
          $(".slider-nav .slick-slide.slick-current").addClass("is-active");
        })
        .slick({
          vertical: true,
          slidesToShow: 10,
          slidesToScroll: 10,
          dots: false,
          arrows: false,
          focusOnSelect: false,
          infinite: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 640,
              vertical: false,
              settings: {
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 420,
              vertical: false,
              settings: {
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });

      $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
        $(".slider-nav").slick("slickGoTo", currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $(".slider-nav .slick-slide.is-active").removeClass("is-active");
        $(currrentNavSlideElem).addClass("is-active");
      });

      $(".slider-nav").on("click", ".slick-slide", function (event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data("slick-index");

        $(".slider-single").slick("slickGoTo", goToSingleSlide);
      });