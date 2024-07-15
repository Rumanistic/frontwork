$(() => {
  // 상단에 표시해줄 이미지 리스트 배열
  const imgList = ["lake-2755907_640.jpg", "fall-4667080_640.jpg", "winter-7685665_640.jpg"];
  // 랜덤 이미지를 표시할 이미지 태그 배열
  const rndImgs = $('.s-image img');
  //배열 정보 확인용 로그
  console.log(rndImgs);

  // 상단 이미지 배열 인덱스 변수
  let idx = 0;
  // let cIdx = 0;
  // 하단 랜덤이미지 배열 인덱스 변수
  let randIdx = 0;
  let autoSlide;

  // 초기 랜덤 이미지 설정 함수
  const setRandImg = () => {
    // 매 rndImgs 요소마다
    $(rndImgs).each((i, e) => {
      // 요소별 다른 이미지를 가져오기 위해 인터벌을 줌(10ms)
      setTimeout(() => {
        // 쿼리 뒤에 현재 날짜와 시간으로 이루어진 변수를 줘서 다른 이미지 로드
        let src = "https://picsum.photos/200/300?" + new Date().getTime();
        // 요소의 src의 값에 웹페이지 경로를 지정
        $(e).attr('src', src);
      }, i * 100);
    })
  }

  // 랜덤 이미지 함수 실행
  setRandImg();

  // 상단 이미지 스크롤 함수
  const animateImage = (direction) => {
    console.log('img right start')
    // 다음 인덱스 변수 지정; 클릭한 버튼의 위치에 따라 왼쪽|오른쪽 결정
    let nextIdx = (direction === 'left') ? (idx - 1 + imgList.length) % imgList.length : (idx + 1) % imgList.length;
    // 현재 이미지를 변수에 담음
    let curImg = `./resources/img/${imgList[nextIdx]}`

    // id가 imgR인 이미지 태그의 위치 지정; left의 경우 화면 밖(display:none 상태), right의 경우 현재 표시중인 화면
    $('#imgR').attr('src', curImg).css({
      display: 'block',
      left: (direction === 'left') ? '-100%' : '100%'
    });

    // id가 imgL인 이미지 태그의 animation 지정; left의 경우 이미지를 왼쪽에서 오른쪽으로 이동, right의 경우 이미지를 오른쪽에서 왼쪽으로 이동
    $('#imgL').animate({
      left: (direction === 'left') ? '100%' : '-100%'
    }, 1000, 'swing');

    // id가 imgL인 이미지 태그의 animation 지정;
    $('#imgR').animate({
      // imgR의 왼쪽 위치를 0으로 이동하여 중앙에 고정
      left: '0'
    }, 1000, 'swing', () => {
      // 콜백 함수 실행; imgL의 src속성을 curImg(현재 이미지)로 업데이트, 위치를 left 0으로 이동
      $('#imgL').attr('src', curImg).css({
        left: '0'
      });
      // imgR의 display를 none으로 지정; 화면에서 보이지 않게 처리
      $('#imgR').css({
        display: 'none'
      });
      // idx 변수 조정
      idx = nextIdx;
      console.log('img right end')
    })
  };
  
  // 슬라이드 시작용 함수, 5초 간격으로 수행
  startSlide = () => {
    autoSlide = setInterval(() => animateImage('right'), 5000);
  };

  // 슬라이드 함수를 멈추는 함수, 사용자가 버튼을 클릭 시 수행
  stopSlide = () => {
    clearInterval(autoSlide);
  };

  
  // const changeImg = () => {
  //   let e = "https://picsum.photos/200/300?" + new Date().getTime();
  //   let ele = $('.image-container.content.m');
  //   $(ele).children('img').css({
  //     backgroundImage: `url(${e})`
  //   })
  //   $(ele).children('img').attr('src', '');
  //   console.log($(ele).children('img'));
  //   cIdx = (cIdx + 1) % rndImgs.length;
  // }

  // const startChange = () => setInterval(() => changeImg(), 2000);

  // startChange();

  // getRandomImg = () => {
  //   rndImgs.each((e) => {
  //     let src = "https://picsum.photos/200/300?" + new Date().getTime();
  //     setInterval(() => e.attr('src', src), 500);
  //   })
  // }

  // startRandImg = () => setInterval(() => getRandomImg(), 1500);


  // 하단의 랜덤 이미지를 가져오는 함수
  const getRandomImg = () => {
    // 5초마다 하나씩 수행함으로 인덱스 관리용 변수를 사용해서 요소를 가져옴
    let e = $(rndImgs[randIdx]);
    // 새로운 이미지를 로드하기 위해 쿼리에 새로운 시간을 연결해서 이미지 사용
    let src = "https://picsum.photos/200/300?" + new Date().getTime();
    // 이미지 적용
    $(e).attr('src', src);

    // 인덱스 조정
    randIdx = (randIdx + 1) % rndImgs.length;
  }

  // 랜덤이미지 함수 수행
  const startRandImg = () => setInterval(getRandomImg, 5000);


  // 사용자가 왼쪽 버튼을 클릭 시 수행
  $('#left').on('click', (e) => {
    // 자동으로 돌던것을 멈추고
    stopSlide();
    // animateImage(왼쪽으로) 함수 수행
    animateImage('left');
    // 이후 자동 수행
    startSlide();
  });

  // 오른쪽도 동일한 방식으로 수행 => 한개의 함수로 합쳐도 될 것 같음
  $('#right').on('click', (e) => {
    stopSlide();
    animateImage('right');
    startSlide();
  });

  // navi 클래스를 갖은 객체에 마우스 진입 시 ul 리스트를 보여주는 함수
  $('li.navi').on('mouseenter', (e) => {
    // console.log($(e.target).children('ul'))
    $(e.target).children('ul').stop().slideDown(500);
    if($(e.target).is('li.navi')){
      // navi 클래스를 가진 li 객체의 색 변경
      $(e.target).stop().animate({'background-color':'#848484', 'color':'white'}, 500);
    }
  })

  // navi 클래스를 갖은 객체에서 마우스 탈출 시 ul 리스트를 숨기는 함수
  $('li.navi').on('mouseleave', (e) => {
    // console.log($(e.target).children('ul'))
    $(e.target).children('ul').stop().slideUp(500);
    if($(e.target).is('li.navi')){
      // navi 클래스를 가진 li 객체의 색 변경
      $(e.target).stop().animate({'background-color':'#ffffff', 'color':'black'}, 500);
    }
  })

  // $('li.navi').on('hover', (e) => {
  //     // console.log($(e.target).children('ul'))
  //     $(e.target).children('ul').stop().slideToggle(500);
  //   })

  // https://picsum.photos/200/300

  // 계속 수행할 함수들 실행
  startSlide();
  startRandImg();

  // li 메뉴의 a 태그 클릭 시 실행
  $('li>a').on('click', (e) => {
    let a = $(e.target).text();
    let b = $(e.target).parents('[id^="navi"]')                       // 상위 요소 중 id가 navi인것 찾기
                       .clone().children('ul').remove().end()         // 복사해서 하위 요소 제거
                       .text().trim();                                // 텍스트 추출
    open(`https://pixabay.com/ko/illustrations/search/${a}%20${b}`);  // pixabay 사이트로 이동 (새창에서 실행)
  })

  // 랜덤 사진 클릭 시 수행
  $('#randImg').on('click', (e) => {
    let src = "https://picsum.photos/200/300?" + new Date().getTime();  // 랜덤 이미지 페이지로 이동 (새창에서 실행)
    open(src);
  })


  $('#more').on('click', (e) => {
    $('#modal').fadeIn();
  });

  // 모달 닫기
  $('.btn-close-modal').on('click', (e) => {
    $('#modal').fadeOut();
  });
})