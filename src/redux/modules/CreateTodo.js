// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const CreateTodo = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default CreateTodo;
