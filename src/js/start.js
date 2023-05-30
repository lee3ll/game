function start(){
  //폴더 드래그, 헤더색 바꾸기
  $(".icon1").draggable({
      //특정 범위 안에서 드래그로 못빠져나가게 하기
      containment: ".icon__box", scroll: false,
      start: function() {
          //드래그시 커서 이미지(색) 바꾸기
          $(".cursor img").attr("src", "images/game_mouse01.png");
          //드래그시 헤더 색 바꾸기
          $("#header").removeClass("blue yellow green");
          $("#header").addClass("red");
      }
  });
  $(".icon2").draggable({
      containment: ".icon__box", scroll: false,
      start: function() {
          $(".cursor img").attr("src", "images/game_mouse02.png");
          $("#header").removeClass("red yellow green");
          $("#header").addClass("blue");
      }
  });
  $(".icon3").draggable({
      containment: ".icon__box", scroll: false,
      start: function() {
          $(".cursor img").attr("src", "images/game_mouse03.png");
          $("#header").removeClass("red blue yellow");
          $("#header").addClass("green");
      }
  });
  $(".icon4").draggable({
      containment: ".icon__box", scroll: false,
      start: function() {
          $(".cursor img").attr("src", "images/game_mouse04.png");
          $("#header").removeClass("red blue green");
          $("#header").addClass("yellow");
      }
  });
  $(".music__wrap").draggable({
      scroll: false,
      start: function() {
          $(".cursor img").attr("src", "images/game_mouse04.png");
      }
  });
  //하단 출력 선택자
  let info = document.querySelector(".info");
  // 빨간 폴더 이벤트
  $(".icon1").mousedown(()=>{
      info.innerHTML = "빨간 뮤직 듣기 클릭했습니다.";
  });
  $(".icon1").draggable({
      drag:function(e){
          info.innerHTML = "빨간 뮤직 듣기 드래그중 입니다.";
      },
  }).draggable({
      stop:function(e){
          info.innerHTML = "빨간 뮤직 듣기 드래그를 놨습니다.";
          settime();
      }
  });
  // 파랑 폴더 이벤트
  $(".icon2").mousedown(()=>{
      info.innerHTML = "파랑 뮤직 듣기 클릭했습니다.";
  });
  $(".icon2").draggable({
      drag:function(e){
          info.innerHTML = "파랑 뮤직 듣기 드래그중 입니다.";
      },
  }).draggable({
      stop:function(e){
          info.innerHTML = "파랑 뮤직 듣기 드래그를 놨습니다.";
          settime();
      }
  });
  // 초록 폴더 이벤트
  $(".icon3").mousedown(()=>{
      info.innerHTML = "초록 뮤직 듣기 클릭했습니다.";
  });
  $(".icon3").draggable({
      drag:function(e){
          info.innerHTML = "초록 뮤직 듣기 드래그중 입니다.";
      },
  }).draggable({
      stop:function(e){
          info.innerHTML = "초록 뮤직 듣기 드래그를 놨습니다.";
          settime();
      }
  });
  // 노랑 폴더 이벤트
  $(".icon4").mousedown(()=>{
      info.innerHTML = "노랑 뮤직 듣기 클릭했습니다.";
  });
  $(".icon4").draggable({
      drag:function(e){
          info.innerHTML = "노랑 뮤직 듣기 드래그중 입니다.";
      },
  }).draggable({
      stop:function(e){
          info.innerHTML = "노랑 뮤직 듣기 드래그를 놨습니다.";
          settime();
      }
  });
  //현재시간
  function printTime() {
      const clock = document.querySelector("#header .time");
      let now = new Date();
      clock.innerHTML = now.getFullYear() + "년 " +
      (now.getMonth()+1) + "월 " +
      now.getDate() + "일 " +
      now.getHours() + "시 " +
      now.getMinutes() + "분 ";
      setTimeout(printTime, 1000);
  };
  //현재 OS, 크기
  let os = navigator.userAgent.toLowerCase();
  let sw = screen.width;
  let sh = screen.height;
  function prinAgent() {
      let os = navigator.userAgent.toLowerCase();
      let sw = screen.width;
      let sh = screen.height;
      if (os.indexOf("windows") >= 0) {
      info.innerHTML = "현재 윈도우를 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
      } else if (os.indexOf("macintosh") >= 0) {
      info.innerHTML = "현재 맥을 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
      } else if (os.indexOf("iphone") >= 0) {
      info.innerHTML = "현재 아이폰을 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
      } else if (os.indexOf("android") >= 0) {
      info.innerHTML = "현재 안드로이드 폰을 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
      }
  }
  //5초후 현재 OS출력하기
  function settime(){
      setTimeout(function(){
          prinAgent()
      },5000);
  }
  //로딩 됐을시 실행
  window.onload = function(){
      window.addEventListener("mousemove", e => {
          gsap.to(".cursor", {
              duration: 0,
              left: e.pageX,
              top: e.pageY
          });
      });
      printTime();    //오른쪽 상단 시간 실행문
      prinAgent();    //현재 OS, 크기 실행문
  }
}
export default start;