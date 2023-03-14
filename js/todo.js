//index.html에 접근
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
//이벤트핸들러 함수 작성
function handleToDoSubmit(event) {
    //새로고침 차단
    event.preventDefault();
    //input 태그 입력값을 newTodo 변수에 복사
    const newTodo = toDoInput.value;
    //input 입력란 초기화 (* 초기화 해도 복사된 newTodo 값에 영향은 없다 *)
    toDoInput.value = " ";
}
//form 태그에 이벤트핸들러 달기
toDoForm.addEventListener("submit", handleToDoSubmit);
