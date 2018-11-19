---
---

;(function () {
  'use strict';

  var
    current = 0,
    delay = {{ site.slideshow_delay }};

  setInterval(
    function () {  current++;  display();  },
    delay);

  function display () {
    var slides = document.getElementsByClassName('slideshow-slide');

    if (current < 0)
      current = slides.length - 1;
    if (current >= slides.length)
      current = 0;

    for (var i = 0; i < slides.length; i++)
      slides[i].style.display = 'none';

    slides[current].style.display = 'block';
  }

  display();
})();
