$(function () {
  // モーダルアニメーション処理
  $('#modalToggle, .c-modal-list__toc, .c-modal__back').on('click', function () {
    $('.c-modal-btn__border').toggleClass('active-btn');
    $('.c-modal-btn__menu').toggleClass('active-menu');
    // $('.c-modal__list').toggleClass('active-list');
    $('.c-modal-list__toc').addClass('modal-border')
    $('.c-modal__back,.c-modal__list').fadeToggle(300);
  });

  // FAQのアコーディオンメニュー処理
  $('#slideBar .p-faq-list__question').on('click', function () {
    $(this).next().slideToggle(350);
    $(this).toggleClass('faq-answer-active');
  });

  // 特定位置に来た時に、要素が出入りする
  const toggleAnimation = (toggleElem) => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1300) {
        $(toggleElem).fadeIn(300);
      } else {
        $(toggleElem).fadeOut(300);
      }
    });
  }

  toggleAnimation('header');
  toggleAnimation('#scrollIcon');
  toggleAnimation('.p-side-wrap');

  
  // メインビジュアルのスライダーアニメーション
  $('.slider').slick({
    fade: true,
    speed: 5000,
    autoplay: true,
    lazyLoad: 'progressive',
    infinite: true
  });


  // スクロールに応じてフェードインする処理
  const scrollFadeIn = (obj,addObj) => {
    $(window).scroll(() => {
      // 繰り返し処理で各々処理させる
      $(obj).each(function () {
        // 変数定義(高さ指定系)
        let scroll = $(window).scrollTop();
        let fadeinHeight = $(this).offset().top;
        let windowHeight = $(window).height();
        // 高さに応じて、クラスを付与する
        if (scroll > fadeinHeight - windowHeight + 200) {
          $(this).addClass(addObj);
        }
      });
    });
  };

  // addObjはaddClassの引数なので(.)が不要
  scrollFadeIn('.fadein', 'scrollin');

  // lessonセクションのホバーアニメーション
  $('.p-lesson-wrap__section').mouseover(function () {
    $('.p-lesson-section , .p-lesson-info').addClass('obj-scale');
    $('.p-lesson-info__text').addClass('text-slide');
  });

  // $('.p-lesson-wrap__section').hover(function () {
  //   $('')
  // });

  // スクロールアニメーション関数
  const scrollFunc = (scrollBtn, scrollNav, i) => {
    $(scrollBtn).on('click', function () {
      let formOffset = $(scrollNav).offset().top;
      $('html,body').animate({
        scrollTop: formOffset - i
      }, 1000);
      return;
    });
  };




  // TOPへスクロールする処理
  scrollFunc('.topScroll', '#topSection', 50);
  // スクールへスクロールする処理
  scrollFunc('.schoolScroll', '#schoolSection', 0);
  // 講師紹介へスクロールする処理
  scrollFunc('.aboutScroll', '#aboutSection', 50);
  // サンプル動画へスクロールする処理
  scrollFunc('.movieScroll', '#movieSection', 50);
  // 料金体系へスクロールする処理
  scrollFunc('.lessonScroll', '#lessonSection', 50);
  // よくあるご質問へスクロールする処理
  scrollFunc('.faqScroll', '#faqSection', 50);
  // 受講生の声へスクロールする処理
  scrollFunc('.customerScroll', '#customerSection', 50);
  // お問い合わせフォームへスクロールする処理
  scrollFunc('.contactScroll', '#contactSection', 50);
});
