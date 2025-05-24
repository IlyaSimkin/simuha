window.addEventListener('load', () => {
  const img = document.querySelector('.simuha_img');
  img.classList.add('active');
});




  const blocks = document.querySelectorAll('.project_sslka');

  blocks.forEach(block => {
    const img = block.querySelector('.sslka_img');

    block.addEventListener('mouseenter', () => {
      img.dataset.originalSrc = img.src;
      img.src = 'img/strelka_sslka_hover.png';
    });

    block.addEventListener('mouseleave', () => {
      img.src = img.dataset.originalSrc;
    });
  });





  const blocks1 = document.querySelectorAll('.project_github');

  blocks1.forEach(block1 => {
    const img1 = block1.querySelector('.github_img');

    block1.addEventListener('mouseenter', () => {
      img1.dataset.originalSrc = img1.src;
      img1.src = 'img/github_hover.png';
    });

    block1.addEventListener('mouseleave', () => {
      img1.src = img1.dataset.originalSrc;
    });
  });




  

$(document).ready(function(){
   
   
   

 
 
 
 
 
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  class Star {
    constructor() {
      this.reset(true);
    }

  reset(initial = false) {
    const side = Math.random();
    if (initial) {
      // при первом запуске — где угодно на экране
      this.x = Math.random() * w;
      this.y = Math.random() * h;
    } else if (side < 0.5) {
      // появляются сверху
      this.x = Math.random() * w;
      this.y = -10;
    } else {
      // появляются слева
      this.x = -10;
      this.y = Math.random() * h;
    }

    this.length = 8 + Math.random() * 5;
    this.speed = 0.2 + Math.random() * 0.2;
    this.angle = Math.PI / 4; // 45° вниз-вправо
  }

    update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;

      if (this.x > w + 20 || this.y > h + 20) {
        this.reset();
      }
    }

    draw() {
      const dx = Math.cos(this.angle) * this.length;
      const dy = Math.sin(this.angle) * this.length;

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x - dx, this.y - dy);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  const STAR_COUNT = 100;
  const stars = Array.from({ length: STAR_COUNT }, () => new Star());

  function animate() {
    ctx.fillStyle = "#161a20";
    ctx.fillRect(0, 0, w, h);

    stars.forEach(star => {
      star.update();
      star.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();













  $('.strelka_img').click(function(e){


    setTimeout(function(){
      e.preventDefault(); // отменяем переход по ссылке
      $('html, body').animate({
        scrollTop: $('.section_simuha').offset().top
      }, 800); // 800 мс — длительность анимации
    }, 100)




    $('.section_simuha').css({
      'display': 'block',
    })

    $('.footer_simuha').css({
      'display': 'block'
    })

    $('.dalee_simuha').css({
      'display': 'block'
    })






    setTimeout(function(){
      $('.header_simuha').css({
        'display': 'none'
      })
    }, 1000)
    




  })

  $('.strelka_img_vverh').click(function(){

      $('.header_simuha').css({
      'display': 'block',
    })

    $('.footer_simuha').css({
      'display': 'none'
    })

      $('.section_simuha').css({
        'display': 'none'
      })
  })







    $('.project_category').on('click', function() {
      $('.project_category').removeClass('project_category_click');
      $('.category_title').removeClass('category_title_click');

      $(this).addClass('project_category_click');
      $(this).find('.category_title').addClass('category_title_click');
    });




    $('.active').click(function(){
      $('.project').hide();
    })

    $('.active_none').click(function(){
      $('.project').show();
    })


})





