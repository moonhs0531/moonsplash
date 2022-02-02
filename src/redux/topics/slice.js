const initialState = {
  list: [],
};

export const ActionTypes = {

  SET_TOPICS: '@TOPICS/SET_TOPICS',
  GET_TOPICS: '@TOPICS/GET_TOPICS',
};

export const ActionCreators = {

  // payload를 인자 값으로 안 넣으면 왜 오류가 나는지?
  setTopics: (payload) => ({
    type: ActionTypes.SET_TOPICS,
    payload,

  }),

  getTopics: (payload) => ({
    type: ActionTypes.GET_TOPICS,
    payload,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TOPICS: {
      return {
        ...state,
        list: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
