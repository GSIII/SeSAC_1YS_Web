// 초기 상태 설정
const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
};

let counts = initState.list.length;
initState['nextID'] = counts;

//액션 타입 정의하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

//액션 생성 함수 설정 - create
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

//액션 생성 함수 설정 - done
export function done(id) {
  return {
    type: DONE,
    id,
  };
}

//리듀서
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          //새롭게 추가되는 값을 배열에 넣기
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
