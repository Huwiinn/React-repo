import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./Input.css";

export default function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // 새로운 Todo List를 생성.
  const submitHandler = (event) => {
    event.preventDefault();

    const newTodos = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuid(),
    };
    // 지금 세팅된 title과 contents를 todos에 넣어주는 작업.
    setTodos((prev) => {
      return [...prev, newTodos];
    });

    // Todo 생성 후, input 초기화
    setTitle("");
    setContents("");
  };

  // input값을 가져옴
  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };
  // input값을 가져옴
  const contentsInputHandler = (event) => {
    setContents(event.target.value);
  };

  return (
    <section>
      <form onSubmit={submitHandler} className="form_wrap">
        <div className="input_wrap">
          <p>
            제목 :
            <input
              type="text"
              onChange={titleInputHandler}
              value={title}
              placeholder="제목을 써주세요"
            />
          </p>
          <p>
            내용 :
            <input
              type="text"
              onChange={contentsInputHandler}
              value={contents}
              placeholder="내용을 써주세요"
            />
          </p>
        </div>
        <button className="btn">Add</button>
      </form>
    </section>
  );
}
