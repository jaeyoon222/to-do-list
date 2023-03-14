//images 에 img 폴더에 있는 파일명들을 작성
const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
];
//images 배열에서 Math.random(),Math.floor()로 무작위로 1개의 img를 선정해서 추출
const chosenImage = images[Math.floor(Math.random() * images.length)];
//createElement()를 사용해서 img 태그를 생성
const bgImage = document.createElement("img");
//추출된 chosenImage를 이용해서 img폴더 안의 경로를 잡아줌
bgImage.src = `/img/${chosenImage}`;
//appendChild()를 이용해서 HTML body 속으로 img태그 입력시킴
document.body.appendChild(bgImage);
