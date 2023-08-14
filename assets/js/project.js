AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Escare NFT 마켓플레이스(PC용 웹)",
    cardImage: "assets/images/project-page/escare_nft_marketplace_pc.png",
    description: "react.js로 프론트 개발, node.js로 백엔드 개발된 NFT마켓 플레이스 PC용 웹사이트. 메타마스크, 카이카스 지갑 연동.",
    Githublink: "https://github.com/AurelianApet/escare_nft_marketplace",
  },
  {
    title: "Escare NFT 마켓플레이스(모바일용 웹)",
    cardImage: "assets/images/project-page/escare_nft_marketplace_mobile.png",
    description: "react.js로 프론트 개발, node.js로 백엔드 개발된 NFT마켓 플레이스 모바일용 웹사이트. 메타마스크, 카이카스 지갑 연동.",
    Githublink: "https://github.com/AurelianApet/escare_nft_marketplace",
  },
  {
    title: "Escare NFT 유저앱",
    cardImage: "assets/images/project-page/escare_nft_app.png",
    description: "react native로 개발된 NFT 마켓플레이스 유저앱. 메타마스크, 카이카스 지갑 연동.",
    Githublink: "https://github.com/AurelianApet/escare_nft_app",
  },
  {
    title: "핀즐 AR",
    cardImage: "assets/images/project-page/pinzle_ar.png",
    description: "zapar엔진을 이용한 웹 ar. node.js로 개발.",
    Previewlink: "https://pinzle.net/",
    Githublink: "https://github.com/AurelianApet/pinzleAR",
  },
  {
    title: "핀즐 AR 관리자페이지",
    cardImage: "assets/images/project-page/pinzle_ar_admin.png",
    description: "node.js로 개발. 마커 등록시 자동으로 zapar엔진에 마커가 업로드되어 zapar엔진에서 이용되는 형태의 마커로 변한됨.",
  },
  {
    title: "스펑키 AR",
    cardImage: "assets/images/project-page/spunkiear.png",
    description: "클라우드기반의 ar앱. Unity, Vuforia 이용됨. 카메라 녹화 및 갤러리 관리, 사진 공유, 편리한 스와이프기능 등이 포함.",
    Githublink: "https://github.com/AurelianApet/spunkie",
  },
  {
    title: "Swept지갑앱",
    cardImage: "assets/images/project-page/swept_wallet.png",
    description: "얼굴인식에 기초하여 니모닉을 생성 및 복구, 지문인식에 의한 지갑보호, Btc, Eth, Solana 지갑 관리. Ionic으로 개발되어 안드로이드 및 iOS앱으로 빌드.",
    Githublink: "https://github.com/AurelianApet/swept_wallet",
  },
  {
    title: "맥주의 신 웹사이트",
    cardImage: "assets/images/project-page/godofbeer.png",
    description: "맥주의 신 웹사이트, 맥주, 브루어리, 매장 등을 등록하고 관리. 총사장, 매장관리자, 판매자, 유저 등의 등급. PC 및 모바일용 웹사이트. react.js로 프론트, node.js로 백엔드 개발됨.",
    Previewlink: "http://godofbeer.kr/",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-beer-frontend",
  },
  {
    title: "와인 웹사이트",
    cardImage: "assets/images/project-page/godofwine.png",
    description: "와인용 사이트, 와인, 브루어리, 매장 등을 관리, 사장, 매장관리자, 판매자, 유저 등급. PC 및 모바일용 웹사이트. react.js로 프론트, node.js로 백엔드 개발됨.",
    Previewlink: "https://nowontap.kr",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-wine-frontend",
  },
  {
    title: "맥주의 신-주문용 태블릿앱",
    cardImage: "assets/images/project-page/border.png",
    description: "태블릿에서 주문용앱. Unity로 개발되어 앱으로 빌드.",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-Order-App",
  },
  {
    title: "맥주의 신-직원용앱",
    cardImage: "assets/images/project-page/bstaff.png",
    description: "직원들이 현재 주문정보와 주문상태 및 직접주문 관리를 진행할 수 있는 주문용 앱. Unity로 개발되어 앱으로 빌드.",
    Githublink: "https://github.com/AurelianApet/GodOfbeer-Staff-app",
  },
  {
    title: "맥주의 신-호출앱",
    cardImage: "assets/images/project-page/bcall.png",
    description: "식당에서 현재 주문된 요리의 상태를 확인하고, 직원 및 태블릿에 알림하는 앱. Unity로 개발되어 앱으로 빌드.",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-Call-App",
  },
  {
    title: "맥주의 신-사장용앱",
    cardImage: "assets/images/project-page/biz.png",
    description: "현재 각 매장들의 영업상태와 정산관리를 진행할 수 있는 사장용앱. Unity로 개발되어 앱으로 빌드.",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-biz-app",
  },
  {
    title: "와인-사장용앱",
    cardImage: "assets/images/project-page/bwine1.png",
    description: "와인용 사장앱. 기능은 맥주용 사장앱과 같고, 단지 와인매장들에 한해서만 관리 가능. Unity로 개발되어 앱으로 빌드.",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-bwine-app",
  },
  {
    title: "맥주의 신-포스앱",
    cardImage: "assets/images/project-page/pos_beer.PNG",
    description: "맥주매장을 전반적으로 관리해주는 포스앱. Unity로 개발되어 앱으로 빌드. 결제단말기, 주방프린터, 키오스크 모니터 등 외부장치 연결.",
    Githublink: "https://github.com/AurelianApet/GoodofBeer-POS-beer",
  },
  {
    title: "와인-포스앱",
    cardImage: "assets/images/project-page/pos_wine.PNG",
    description: "와인매장을 전반적으로 관리해주는 포스앱. Unity로 개발되어 앱으로 빌드. 결제단말기, 주방프린터, 키오스크 모니터 등 외부장치 연결.",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-POS-Wine",
  },
  {
    title: "맥주의 신-주방용앱",
    cardImage: "assets/images/project-page/bkitchen.png",
    description: "주방에서 현재 주문상태를 확인하고, 현재 요리의 조리상태를 반영, 호출. Unity로 개발되어 앱으로 빌드.",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-Kitchen-App",
  },
  {
    title: "맥주의 신-모니터용앱",
    cardImage: "assets/images/project-page/bmonitor.PNG",
    description: "제정된 주문에 대해서는 모니터로 정산결과를 보여주는 앱. Unity로 개발되어 앱으로 빌드.",
    Githublink: "https://github.com/AurelianApet/GodofBeer-MonitorApp",
  },
  {
    title: "맥주의 신-셀프앱",
    cardImage: "assets/images/project-page/self1.png",
    description: "맥주 셀프단말기와 연결되어 셀프단말기를 제어해주는 기능 수행. Unity로 개발되어 앱으로 빌드.",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-bself1",
  },
  {
    title: "와인-셀프앱 2대용",
    cardImage: "assets/images/project-page/bself2.png",
    description: "와인 셀프단말기 2대짜리와 연결되어 단말기를 제어해주는 용도의 앱. 와인을 따르고 남은 용량 및 가격 계산해서 자동으로 포스앱에 전송.",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-Wine-Self2-App",
  },
  {
    title: "와인-셀프앱 8대용",
    cardImage: "assets/images/project-page/bself8.jpg",
    description: "와인 8대용 셀프단말기와 연결되어 커피 및 와인을 추출해주는 용도의 앱.",
    Githublink: "https://github.com/AurelianApet/GodOfBeer-bself8",
  },
  {
    title: "iLike Animal",
    cardImage: "assets/images/project-page/ilikeanimal.png",
    description: "각 동물들의 카드를 비추면 해당 동물들의 3디 모델이 나타나면서 애니메이션 되어 실감있게 조종되는 AR앱. Unity, Vuforia를 이용.",
    Githublink: "https://github.com/AurelianApet/AnimalAR",
  },
  {
    title: "iLike Dino",
    cardImage: "assets/images/project-page/ilikedino.PNG",
    description: "공룡들의 카드를 비추면 해당 공룡들이 나타나고, 그것을 조종하면서 실감있게 느낄수 있게 해주는 AR앱. Unity, Vuforia 이용.",
    Previewlink: "https://play.google.com/store/apps/details?id=xyz.ilike.ilikedino254",
    Githublink: "https://github.com/AurelianApet/dinoAR",
  },
  {
    title: "AS 사용자앱",
    cardImage: "assets/images/project-page/as_user.png",
    description: "수리접수 및 부품 주문, 문의, QA 등의 기능. Unity로 개발되어 앱으로 빌드.",
    Githublink: "https://github.com/AurelianApet/as-userapp",
  },
  {
    title: "AS-관리자앱",
    cardImage: "assets/images/project-page/as_admin.png",
    description: "부품을 등록하고, 유저들로부터 수리접수를 받고 처리, 채팅기능 둥. Unity로 개발되어 앱으로 빌드, CI로 백엔드 및 socket.io 채팅서버 구축.",
    Githublink: "https://github.com/AurelianApet/as-admin",
  },
  {
    title: "위플레이",
    cardImage: "assets/images/project-page/weplay.PNG",
    description: "node.js로 개발됨. pc 및 모바일용 페이지.",
    Previewlink: "http://weplaysports.net/",
  },
  {
    title: "팬더 TV 뷰봇",
    cardImage: "assets/images/project-page/viewbot.PNG",
    description: "팬더 tv에 자동으로 로그인하여 방에 입장하여, 해당 프로의 보기수를 늘여주는 기능의 봇. C#으로 개발.",
    Githublink: "https://github.com/AurelianApet/viewbot",
  },
  {
    title: "팬더 TV 추천봇",
    cardImage: "assets/images/project-page/totalbot.PNG",
    description: "팬더 tv에 해당 비제이로 로그인하여 추천수를 늘이고, 채팅을 자동으로 진행하는 봇. C#으로 개발.",
    Githublink: "https://github.com/AurelianApet/totalbot",
  },
  {
    title: "팬더 TV 채팅봇",
    cardImage: "assets/images/project-page/chattingbot.PNG",
    description: "팬더 tv에 입장하여 일정한 시간간격으로 문구를 보내고, 선물인사, 두산인사 등의 채팅기능 자동으로 수행. c#으로 개발. node.js기반의 채팅서버 구축.",
  },
  {
    title: "희망편지쓰기대회",
    cardImage: "assets/images/project-page/hopeletter.PNG",
    description: "html, javascript, php, laravel",
    Previewlink: "https://hope.gni.kr/",
    Githublink: "https://github.com/AurelianApet/HopeLetter",
  },
  {
    title: "탱글",
    cardImage: "assets/images/project-page/tangle.png",
    description: "애니메이션 효과가 많이 들어있는 반응형 랜딩페이지, php, html, javascript, bootstrap. pc, 태블릿, 모바일용.",
    Previewlink: "http://182.219.90.56",
    Githublink: "https://github.com/AurelianApet/tangle",
  },
  {
    title: "UNOPND",
    cardImage: "assets/images/project-page/unopnd.PNG",
    description: "애니메이션 효과가 많이 들어있는 반응형 랜딩페이지, html, javascript, bootstrap. pc, 태블릿, 모바일용.",
    Previewlink: "http://182.219.90.56:8011",
    Githublink: "https://github.com/AurelianApet/Unopnd",
  },
  {
    title: "AudioMixer",
    cardImage: "assets/images/project-page/AudioMixer.PNG",
    description: "오디오파일들을 불러들여 믹서기능 수행. C#으로 개발.",
    Githublink: "https://github.com/AurelianApet/AudioMixer",
  },
  {
    title: "두더지게임",
    cardImage: "assets/images/project-page/unigoldHunters.png",
    description: "유니티로 개발된 보석 채굴게임.",
    Githublink: "https://github.com/AurelianApet/UnigoldHunters",
  },
  {
    title: "Facebook 봇",
    cardImage: "assets/images/project-page/facebookbot.PNG",
    description: "facebook에서 자동으로 토큰 획득하여, 일정한 기능 수행. asp.net으로 개발.",
    Githublink: "https://github.com/AurelianApet/Facebook-Bot",
  },
  {
    title: "이미지 에디터",
    cardImage: "assets/images/project-page/imageeditor.png",
    description: "react.js로 개발된 pc 및 모바일용 이미지 편집기.",
  },
  {
    title: "주피드앱",
    cardImage: "assets/images/project-page/jupeed.PNG",
    description: "음식 배달서비스, java, kotlin으로 개발.",
    Previewlink: "https://play.google.com/store/apps/details?id=com.special_uridongne.jupeed",
    Githublink: "https://github.com/AurelianApet/Jupeed-iOS",
  },
  {
    title: "머니트리",
    cardImage: "assets/images/project-page/moneytree.png",
    description: "react.js로 개발되어, 웹 패키징.",
    Previewlink: "https://play.google.com/store/apps/details?id=kr.co.galaxiacoms.cashg&hl=en_US",
  },
  {
    title: "2020 온라인 청소년 과학 한마당",
    cardImage: "assets/images/project-page/science.PNG",
    description: "php, javascript, html, jquery, bootstrap",
    Previewlink: "www.scienceall.com",
  },
  {
    title: "스누팔",
    cardImage: "assets/images/project-page/snupal.PNG",
    description: "drupal",
    Previewlink: "https://snupal.snu.ac.kr/",
  },
  {
    title: "보행 시뮬레이션",
    cardImage: "assets/images/project-page/walk_simulation.PNG",
    description: "걷기, 달리기 등의 상태에 따라 몸의 각 부분을 제어하는 시뮬레이션. 유니티로 개발.",
    Githublink: "https://github.com/AurelianApet/SimulatorApp",
  },
  {
    title: "치아모형 AR",
    cardImage: "assets/images/project-page/toothar.png",
    description: "해당한 치아모델을 인식하면 그 모델위에 보철모델이 입혀지면서 치료효과를 예측해주는 ar앱. 유니티로 개발.",
    Githublink: "https://github.com/AurelianApet/toothAR",
  },
  {
    title: "기사편집기",
    cardImage: "assets/images/project-page/text_editor.PNG",
    description: "많은 기사문서를 입력하여, 해당한 글자들을 처리하고, 단어 변환 및 한글변환 등을 해서 기사를 완성하는 기사편집기, c#으로 개발됨.",
  },
  {
    title: "Weble",
    cardImage: "assets/images/project-page/weble.jpg",
    description: "react.js로 개발.",
    Previewlink: "https://www.revu.net/",
  },
  {
    title: "삼육대학교",
    cardImage: "assets/images/project-page/samyuc.PNG",
    description: "php, html, javascript",
    Previewlink: "https://www.syu.ac.kr/",
  },
  {
    title: "한국잡월드 사이트(관리자용, 편집자용, 키오스크용)",
    cardImage: "assets/images/project-page/jobworld_manager.png",
    description: "편집자는 등록된 레이아웃을 선택하여 기자로부터 날라온 기사들로부터 쉽게 기사를 편집하고, 관리자는 기자 및 편집자 관리 및 완성된 기사를 키오스크에 보여주는 등의 기능 수행. asp.net으로 개발.",
    Githublink: "https://github.com/AurelianApet/jobWorld_Manager",
  },
  {
    title: "한국잡월드 기자용앱",
    cardImage: "assets/images/project-page/jobworld_app1.PNG",
    description: "사진을 찍고 글을 편집하여 기사를 완성하여 편집부로 보내는 기자용 앱. Unity로 개발.",
    Githublink: "https://github.com/AurelianApet/jobWorld_UserApp",
  },
  {
    title: "한샘 가구 배치 AR앱",
    cardImage: "assets/images/project-page/hansam.png",
    description: "일정한 가구모형을 직접 배치해보면서 효율성을 검증해보는 면인식기반의 ar앱. 유니티로 개발.",
  },
  {
    title: "포토존 AR앱",
    cardImage: "assets/images/project-page/photozonear.png",
    description: "Unity로 개발.",
  },
  {
    title: "월드몰고 롯테마트앱",
    cardImage: "assets/images/project-page/worldmallgo.png",
    description: "Unity로 개발.",
    Githublink: "https://github.com/AurelianApet/WorldMallGoAR",
  },
  {
    title: "Navigation 앱",
    cardImage: "assets/images/project-page/navigation.png",
    description: "설치된 비콘으로부터 위치를 잡아 방향을 안내해주는 앱. 유니티로 개발.",
  },
  {
    title: "Stoneage앱",
    cardImage: "assets/images/project-page/stoneage.png",
    description: "유니티로 개발.",
  },
  {
    title: "OCR문서 인식 프로그램",
    cardImage: "assets/images/project-page/ocr.png",
    description: "유니티로 개발.",
  },
  {
    title: "타요 컬러링북",
    cardImage: "assets/images/project-page/tayocoloringbook.png",
    description: "Unity, Vuforia, Asp.net",
  },
  {
    title: "바다속이야기",
    cardImage: "assets/images/project-page/underthesea_coloringbook.png",
    description: "Unity, Vuforia, Asp.net",
  },
  {
    title: "세계명작동화 컬러링북",
    cardImage: "assets/images/project-page/aesopcoloringbook.png",
    description: "Unity, Vuforia, Asp.net",
    Githublink: "https://github.com/AurelianApet/Asop-Coloring-Admin",
  },
  {
    title: "동물원AR",
    cardImage: "assets/images/project-page/zooar.png",
    description: "위치기반 ar. 유니티로 개발.",
  },
  {
    title: "animalAR",
    cardImage: "assets/images/project-page/animalar.png",
    description: "Unity, Vuforia",
  },
  {
    title: "StarAR앱",
    cardImage: "assets/images/project-page/starar.png",
    description: "Unity, Asp.net, Vuforia, 마커를 비추면 등록된 3디 모델(애니메이션 포함) 및 비디오가 출현.",
    Githublink: "https://github.com/AurelianApet/StarAR",
  },
  {
    title: "태건에듀 컬러링북",
    cardImage: "assets/images/project-page/taegun_coloringbook.png",
    description: "Unity, Vuforia, Asp.net",
    Githublink: "https://github.com/AurelianApet/TaegunEdu-Coloring",
  },
  {
    title: "ChatGPJESUS",
    cardImage: "assets/images/project-page/ChatGPJESUS.png",
    Githublink: "https://github.com/AurelianApet/ChatGPJESUS",
  },
  {
    title: "이메일 템플릿",
    cardImage: "assets/images/project-page/Email-Template.png",
    Githublink: "https://github.com/AurelianApet/OpenAI-Email",
  },
  {
    title: "LotteryGame",
    cardImage: "assets/images/project-page/lotteryGame.png",
    Githublink: "https://github.com/AurelianApet/Lottery-Game",
  },
  {
    title: "Webaverse",
    cardImage: "assets/images/project-page/webaverse.png",
    Githublink: "https://github.com/AurelianApet/Webaverse",
  },
  {
    title: "Webaverse-creator",
    cardImage: "assets/images/project-page/webaverse-creator.png",
    Githublink: "https://github.com/AurelianApet/Webaverse-Dashboard",
  },
  {
    title: "Stickman",
    cardImage: "assets/images/project-page/Stickman.png",
    description: "Built using Python.",
  },
  {
    title: "wrappedOrdinal",
    cardImage: "assets/images/project-page/wrappedOrdinal.png",
    description: "Built using Python.",
  },
  {
    title: "카지노게임 웹사이트",
    cardImage: "assets/images/project-page/casino.PNG",
    description: "Built using Python.",
    Githublink: "https://github.com/AurelianApet/Casino-Front",
  },
  {
    title: "공항AR",
    cardImage: "assets/images/project-page/airpotar.png",
    description: "공항 주변의 비행기들을 인식하여 그 상태를 스티커로 실시간 확인해주는 앱. Unity, Deeplearning, python, c++",
    Githublink: "https://github.com/AurelianApet/AirportAR",
  },
  {
    title: "부동산AR",
    cardImage: "assets/images/project-page/realestate_ar.png",
    description: "위치기반 ar",
    Githublink: "https://github.com/AurelianApet/R114Go",
  },
  {
    title: "3D Chess게임",
    cardImage: "assets/images/project-page/3dchess.PNG",
    description: "Unity game.",
    Githublink: "https://github.com/AurelianApet/3D-Chess-Game",
  },
  {
    title: "3D Tetris",
    cardImage: "assets/images/project-page/tetris.png",
    description: "Unity Game.",
    Githublink: "https://github.com/AurelianApet/Tetris-3d",
  },
  {
    title: "Super speed 카 레이싱 게임",
    cardImage: "assets/images/project-page/super_speed_car.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/Super-Speed-Car",
  },
  {
    title: "Free runner 게임",
    cardImage: "assets/images/project-page/freerunner.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/Free-Runner",
  },
  {
    title: "Subway Surf runner 게임",
    cardImage: "assets/images/project-page/SubWay_Surf_run.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/SubWay-Surf-Run",
  },
  {
    title: "Zoombie smash race",
    cardImage: "assets/images/project-page/zombie_smash_race.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/Zoombie-Smash-Race",
  },
  {
    title: "8 Pool",
    cardImage: "assets/images/project-page/8pool.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/8Pool",
  },
  {
    title: "Fight 게임",
    cardImage: "assets/images/project-page/fight.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/Fight-Game",
  },
  {
    title: "Casino Horses Race 게임",
    cardImage: "assets/images/project-page/casino_horses_race.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/Casino-Horse-Racing-Game",
  },
  {
    title: "포커 게임",
    cardImage: "assets/images/project-page/poker.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/Poker",
  },
  {
    title: "Tri Shape",
    cardImage: "assets/images/project-page/trishape.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/TriShape-iOS",
  },
  {
    title: "Word Brain",
    cardImage: "assets/images/project-page/wordbrain.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/WordBrain",
  },
  {
    title: "BetFairBot",
    cardImage: "assets/images/project-page/bestbot.PNG",
    description: "bet fair bot.",
    Githublink: "https://github.com/AurelianApet/BetFair",
  },
  {
    title: "SupremeBot",
    cardImage: "assets/images/project-page/zircop.PNG",
    description: "Shopping bot.",
    Githublink: "https://github.com/AurelianApet/Supreme-bot",
  },
  {
    title: "사무라이",
    cardImage: "assets/images/project-page/samurai.PNG",
    description: "Unity game",
    Githublink: "https://github.com/AurelianApet/Samurai",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
