import React from "react";
import "./TodoList.css";
import Todo from "../Todo";

// mapν¨μ
export default function TodoList({ todos, isActive, setTodos }) {
  // const deleteHandler = (t) => {
  //   alert("μ­μ ");
  // };

  return (
    <section className="TodoList_container">
      <div>
        <h4 className="title">{isActive === true ? "Doing πββοΈ" : "Done β"}</h4>
        {todos
          .filter((item) => item.isDone === !isActive) //!isActive == false
          .map((item) => {
            return (
              // <div className="card_wrap" key={item.id}>
              //   <h3>{item.title}</h3>
              //   <p>{item.contents}</p>
              //   <button className="btn">{isActive ? "μλ£" : "μ·¨μ"}</button>
              //   <button className="btn" onClick={deleteHandler}>
              //     μ­μ 
              //   </button>
              // </div>
              <Todo item={item} isActive={isActive} setTodos={setTodos} />
            );
          })}
      </div>
    </section>
  );
}

// doing, done μμ λ€λ₯΄κ² νλ λ²?? redux μλ ¨μ£Όμ°¨ λ€μΌλ©΄μ μμλ³΄κΈ°.
