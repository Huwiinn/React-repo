import React from "react";
import "./TodoList.css";
import Todo from "../Todo";

// map함수
export default function TodoList({ todos, isActive, setTodos }) {
  // const deleteHandler = (t) => {
  //   alert("삭제");
  // };

  return (
    <section className="TodoList_container">
      <div>
        <h4 className="title">{isActive === true ? "Doing 🏃‍♂️" : "Done ✅"}</h4>
        {todos
          .filter((item) => item.isDone === !isActive) //!isActive == false
          .map((item) => {
            return (
              // <div className="card_wrap" key={item.id}>
              //   <h3>{item.title}</h3>
              //   <p>{item.contents}</p>
              //   <button className="btn">{isActive ? "완료" : "취소"}</button>
              //   <button className="btn" onClick={deleteHandler}>
              //     삭제
              //   </button>
              // </div>
              <Todo item={item} isActive={isActive} setTodos={setTodos} />
            );
          })}
      </div>
    </section>
  );
}

// doing, done 색상 다르게 하는 법?? redux 숙련주차 들으면서 알아보기.
