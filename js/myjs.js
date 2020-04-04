$(document).ready(function(){
        $( '#slider1' ).sliderPro();
});

$( document ).ready(function( $ ) {
  $( '#slider3' ).sliderPro({
    width: '100%',//横幅
    arrows: false,//左右の矢印を出す
    buttons: false,//ナビゲーションボタンを出す
    aspectRatio: 1.5,//スライドのアスペクト比
    forceSize: 'fullWindow',//ウィンドウ内全画面表示
    slideDistance:0,//スライド同士の距離
  });
});

$( document ).ready(function( $ ) {
  $('#wide').sliderPro({
    width: 600,//横幅
    arrows: false,//左右の矢印
    buttons: false,//ナビゲーションボタンを出す
    slideDistance:0,//スライド同士の距離
    visibleSize: '100%',//前後のスライドを表示
	forceSize: 'fullWidth'
  });
});


jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});


//scroll fix header
$(function () {
	"use strict";
	var flag = "view";
 
  $(window).on("scroll", function () {
    // scrollTop()が「200」より大きい場合
   //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
   //消えていくタイミングでヘッダが表示されて固定される。  
    
    if ($(this).scrollTop() > 200) {
      if (flag === "view") {
        $(".fix-header").stop().css({opacity: '1.0'}).animate({
   //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
          top: 0
        }, 500);
 
        flag = "hide";
      }
    } else {
      if (flag === "hide") {
        $(".fix-header").stop().animate({top:"-66px",opacity: 0}, 500);
		//上にあがり切ったら透過度を0%にして背景が生きるように
        　　　　//”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
        flag = "view";
      }
    }
  });
});

//固定ヘッダずれ解消
$(function(){
	$('a[href^=#]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var headerHeight = 62; //固定ヘッダーの高さ
		var position = target.offset().top - headerHeight; //ターゲットの座標からヘッダの高さ分引く
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

//固定ヘッダずれ解消ここまで

//ハンバーガーメニューここから
(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);
//ハンバーガーメニューここまで