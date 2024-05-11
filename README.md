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

(이곳에 구현한 이미지를 이곳에 첨부해주세요. 아래는 예시 이미지입니다.)

![](https://velog.velcdn.com/images/wuzoo/post/509d4112-3edb-482d-82cb-89edf105a060/image.png)

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

![](https://velog.velcdn.com/images/wuzoo/post/ab092dd4-595e-41ab-a850-85cab0c83e80/image.png)
