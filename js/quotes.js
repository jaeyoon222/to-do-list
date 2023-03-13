//인용문 들어갈 변수를 배열로 만들고 그 속에 객체형식으로 quote와 author작성
const quotes = [
    {
        quote: "간단함이 훌륭함의 열쇠다",
        author: "by 이소룡",
    },
    {
        quote: "낭비한 시간에 대한 후회는 더 큰 낭비다",
        author: "by 메이슨 쿨리",
    },
    {
        quote: "해야할 일을 과감히 하라, 결심한 일은 반드시 실행하라.",
        author: "by 벤자민 프랭클린",
    },
    {
        quote: "내일의 실현을 가로막는 유일한 한계는 오늘을 의심하는 것이다.",
        author: "by 프랭클린 D.루즈벨트",
    },
    {
        quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
        author: "by 윈스턴 처칠",
    },
    {
        quote: "미래는 현재 우리가 무엇을 하는가에 달렸다.",
        author: "by 마하트마 간디",
    },
    {
        quote: "자기 신뢰는 성공의 첫번째 비결이다",
        author: "by 랄프 왈더 엔머슨",
    },
    {
        quote: "최대한의 삶을 살고, 최대한 긍정적인 것에 집중하자.",
        author: "by 매트 카메론",
    },
    {
        quote: "사람이 할수 있는 가장 훌륭한 승리는 바로 자기 자신을 이기는ㄴ 것이다.",
        author: "by 페스탈로치",
    },
    {
        quote: "가치있는 목표를 향한 움직임을 개시하는 순간 당신의 성공은 시작된다.",
        author: "by 찰스 칼슨",
    },
    {
        quote: "반복적으로 하는 일 그것이 바로 당신이다. 그러므로 탁월함은 행동이 아닌 습관이다.",
        author: "by 아리스토텔레스",
    },
];
//HTML 태그에 접근하기 위한 변수를 만들어준다.
const quote = document.querySelector("#quote h3:first-child");
const author = document.querySelector("#quote h3:last-child");
//Math.floor() 와 Math.random()을 이용해서 배열에서 무작위로 1개의 객체를 추출한다.
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
//추출한 객체의 quote와 author을 innerText를 사용해서 HTML에 작성되게 만든다.
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;