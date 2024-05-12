## 멋쟁이사자처럼 12기 클론코딩 과제

이번 시간에는 그동안 배운 styled component와 React hook(useState, useEffect)을 사용하여 직접 클론코딩을 진행해볼 겁니다.
이전 세션에 비해 다소 난이도가 올라갈 수 있으나 실제 구현되어있는 서비스를 직접 따라 만들면서 배우는 것만큼 빠르고 효과적인 공부법은 없으니까요.
모두 화이팅!

## 실습 진행방법

이번 주차는 과제 중심으로 세션이 진행됩니다!
직접 Component를 만들어서 아래의 홈페이지와 같은 페이지를 구현해보세요.

https://getbootstrap.com/docs/4.3/examples/album/

- Icon 이미지 가져오기 : https://heroicons.com

### 어른 사자의 길

1. 우측 상단 햄버거 버튼 클릭 시 진행되는 동적 기능
2. 기타 애니메이션 효과
3. 하단 Footer

## 구현 화면

./FE-react-styled-component-clonecoding\src\assets\스크린샷 2024-05-12 170311.png
구현화면 경로는 assets 폴더안에 이미지에 스크린샷이라고 되어있는 이미지입니다.

## 구현 조건

1. `components`, `assets`, `pages` 3개의 폴더로 구분하여 개발합니다.
   - components 폴더엔 내가 구현한 컴포넌트들을, assets 에는 이미지 파일들을, pages 에는 내가 보여줄 페이지 컴포넌트를 위치시킵니다.
2. 상단에 `Header`는 스크롤하여도 화면에 고정되어 보이도록 합니다.

## 컴포넌트 계층 구조

1. Header
   가장 먼저 보이는 header의 검정 바탕은 HeaderContainer라는 스타일 컴포넌트를 만들었습니다. position은 조건에 맞게 fixed로 고정시키고 이곳에 들어갈 글자들은 white여야하기 떄문에 color는 white로 지정했습니다.

   Album글자와 아이콘이 들어갈 부분을 HeaderTitle라는 스타일 컴포넌트를 만들었습니다. 사실 이때, album글자부분과 햄버거 모양 아이콘 부분을 따로 컴포넌트를 만들었어야하는데 나중에 이부분은 수정해보도록 하겠습니다. ㅠㅠ

   그리고 아이콘은 지정할게 많아서 Icon이라는 스타일컴포넌트를 만들어 width와 height 그리고 img태그를 이용하여 만들었습니다. 이때 확장자가 svg라는 파일을 assets 폴더안에 만들고 아이콘 사이트에서 svg코드를 긁어와 복붙한 후 Icon 컴포넌트를 사용할 때 src로 이 부분의 경로를 넣어주었습니다. 이번 과제에서 svg 사용하는 법을 새로 배워서 재밌었습니다!

2. Banner
   배너 부분은 가운데 부분에 버튼과 글자들이 들어가는 부분을 말합니다.
   이때 전체적인 배너를 지정할 부분을 BannerBack으로 이름짓고 컴포넌트를 만들었습니다. 바탕색은 흰색으로 지정하였습니다.

   BannerContainer라는 부분은 배너부분 가운데 들어갈 텍스트와 버튼 부분을 모두 감싸는 큰 컨테이너를 말합니다. 이 부분은 div태그로 만들었으며 text-align으로 안하고 algin이나 jsutify-content로하면 아무리 center로 적용해도 글자가 가운데로 오더라구요.. 그래서 text-align으로 center 적용하니..!! 바로 가운데로 오는 매직,,, 짜증^^

   BannerContentTitle부분은 가운데 가장 큰 글씨가 들어가는 부분을 말하는 컴포넌트 입니다. 다른 서브 텍스트들과 달리 글자 크기나 색깔이 달라서 따로 만들었습니다. 컬러는 #343a40를 이용하고 밑에 서브 텍스트와의 간격을 위해 margin-bottom을 0.5rem주었습니다.

   BannerContentSub는 큰 타이틀 밑에 서브 텍스트 부분을 맡은 컴포넌트입니다. 이부분의 컬러는 #6c757d로 했습니다.

   마지막으로 Button모양 처럼 생긴 두 부분은 크게 ButtonContainer라는 컴포넌트로 감싸고 첫번째 파란색 버튼은 BannerButtonMain으로 두번째 회색 버튼은 BannerButtonSecond로 만들었습니다. 이 버튼들은 border-radius나 cursor를 pointer로 하는 등의 새로운 스타일을 지정했습니다.

3. Card
   이 부분이 젤 어려웠습니다..ㅠㅠ 그리드 쓰면 편하다고 하셨는데 그리드가 익숙하지 않다보니 그냥 div태그와 각 태그들이 가진 display성질이랑 container들을 몇개를 구성해야 차례로 배치할 수 있을지 생각하느라 머리 터질뻔 했어요;;;; 프장님 진짜 너무하십니다. 바빠죽겠는데;;; 과제 좀 쉽게 내주세요

   그래서 이 Card부분은 다른 header나 Banner보다 훨씬 컴포넌트를 많이 만들었습니다. 들어갈 text랑 image들이 많다보니 이렇게 많아질 줄은 몰랐네요.

   -CardStyle은 Card부분의 총 width랑 height를 지정하고 백그라운드 컬러가 흰색이 아니어서 다른 색상으로 입혀줬습니다.

   -Container 부분은 최종적인 각각의 box들을 담을 부분이구요, 그래서 height나 width가 CardStyle보단 작습니다. margin이나 padding도 넣어줬습니다.

   -BoxArray부분은 각 상자들 나란히 배치하는 것을 담당했습니다. 그래서 flex-wrap으로 해줬습니다.

   -WrapCard 부분이 바로 이미지 부분과 밑에 글씨를 한번에 묶는 태그입니다.
   box-sizing 은 border-box로 해주고 컬러는 흰색, radius도 주었습니다.

   -ImageBox는 이미지 부분 한번에 묶을 div태그입니다. 그냥 이미지 태그로 하면 block성질 아니라서 배치 이상해질까봐 div로 묶어서 했습니다.

   -Image 부분은 이미지 들어갈 부분이라 img태그로 해줬습니다. 꽁꽁 고양이 사진.src참고

   -TextBox는 text랑 묶는 div태그입니다.
   -Text는 p태그로 해줬구요 지금 생각해보니 div태그로하지 굳이 왜 두개를 만들었나 의문이 갑자기..여튼 그렇습니다..

   -ButtonGroup은 Button두개 한번에 묶을 컴포넌트이구요. div태그로 만들었습니다.
   나란히 배치해야해서 display는 flex로 해줬습니다.
   -IndividualButton 컴포넌트는 버튼 두개 각각 만들기엔 스타일이 비슷해서 Button태그로 한번에 스타일 지정했습니다. color는 6C757D이고 border-radius도 주고 background-color는 white로 했습니다.

![](https://velog.velcdn.com/images/wuzoo/post/ab092dd4-595e-41ab-a850-85cab0c83e80/image.png)
