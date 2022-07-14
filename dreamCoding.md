# 드림코딩 프론트엔드 개발자 입문편 요약

## 1. HTML-웹사이트 분석하기

- MDN

  - HTML elements reference: [https://developer.mozilla.org/en-US/d...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa0RYMWlVdlRqdlhtNlhsNzR5cnZDTnpfMUpGd3xBQ3Jtc0ttUC1nQjhVckRGanFhaW1TNXB4VHlIU0luY0xPc19XcUszcHg4TzJmV05iTUJCVGUyMWh5ZnNyeW9vUWRKcENQRGN6QlVwcWYweUJMTC0taWw3MmxpVHAtbzVad3lzQ3p3T1ZWdnFraVNpWjBEQ1ZxVQ&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTML%2FElement&v=i0FN-OwJ7QI) 

  - Document and website structure: [https://developer.mozilla.org/en-US/d...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazE1RDV3S2ZIUTNwamMyeDdFLUF4VG1uOWhvZ3xBQ3Jtc0ttTTNDSndRcVpFajUwamV6WG5pSTJxdGYyblRUc2RZVWFhdmFIM0hjWEc3R0NRY1d2d0ZpNlVGRjZfdGMzd1MyMVVUSHdUSUoxRTg3M0g4V0RMc2x6NXhIRWxHVml2cWpvOG5KTU92VG9TR05lVjBFZw&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FHTML%2FIntroduction_to_HTML%2FDocument_and_website_structure&v=i0FN-OwJ7QI)

- 웹사이트를 **박스모델** 로 나누어라



## 2. HTML-Semantic Tag 정리

- box 와 item 분리
  - box: header, footer, nav, aside, main, section, article, div, span, form
    - 사용자에게 보여지지 않음
  - item:a, button, input, label, img, video, audip, map, canvas, table
    - 사용자에게 보여짐
- block 과 inline level
  - div vs span

- Attributes



## 3. CSS-Selector

- Cascading Style Sheet

- selectors

  - universal: *
  - type: tag
  - id: #id
  - class:.class
  - state: :
  - attribute: []
  
  ```css
  /*
  selector{
   property:value;
  }
  */
  ```

- 연습해보기: https://flukeout.github.io/



## 4. CSS-Layouts

- display
  - inline - 줄
  - block - 상자
  - inline-block - 정렬 가능 상자 
- position
  - static: 기본값 
  - relative: 원래 자리에서 상대적으로 이동
  - absolute: 바로 상위 박스 기준으로 이동 (원자리에서 빠져나옴)
  - fixed: 윈도우 내 고정 위치
  - sticky: 원래 자리에 + 스크롤링 해도 변화 없음

## 5. Flexbox
- float
  - left
  - center
  - right
- container + item
- main axis(중심축) + cross axis(반대축)
- container attr
  - display:flex;
  - flex-direction: row || colunm; - 중심축 결정
  - flex-wrap:nowrap || wrap;  - 아이템이 컨테이너를 벗어났을 때 줄 바꾸는 속성  
  - justify-content: space-around || space-between;  /* main axis*/ -균등한 간격으로 정렬하기
  - align-items: center; /* cross axis */
  - align-content: center;
- item attr
  - order: 순서
  - flex-grow : 0/1(커짐)/2(더) 
  - flex-shrink : 0/1(작아짐)/2(더) 
  - flex-basis: 사용자 설정
  - align-self : 하나만 위치 설정
- 연습해보기:
  - https://flexboxfroggy.com/#ko 
- flexbox 사용한 다양한 레이아웃
  - https://d2.naver.com/helloworld/8540176
- mdn 문서
  - https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
  


## 5.Responsible Web Site
  - Media Queries의 활용
  - float 대신 -> flexbox, vw, vh
  