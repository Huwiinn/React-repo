import React from "react";

export default function Todo({ item, isActive, setTodos }) {
  const deleteHandler = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };
  const switchHandler = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div className="card_wrap" key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.contents}</p>
      <button className="btn" onClick={switchHandler}>
        {isActive ? "완료" : "취소"}
      </button>
      <button className="btn" onClick={deleteHandler}>
        삭제
      </button>
    </div>
  );
}
