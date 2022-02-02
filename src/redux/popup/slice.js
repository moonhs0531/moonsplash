const initialState = {
  visibility: false,
};

export const ActionTypes = {
  UPDATE_STATE: '@POPUP/UPDATE_STATE',
  OPEN_POPUP: '@POPUP/OPEN_POPUP',
  CLOSE_POPUP: '@POPUP/CLOSE_POPUP',
};

export const ActionCreators = {

  updateState: (payload) => ({
    type: ActionTypes.UPDATE_STATE,
    payload,
  }),

  openPopup: (payload) => ({
    type: ActionTypes.OPEN_POPUP,
    payload,
  }),
  closePopup: (payload) => ({
    type: ActionTypes.CLOSE_POPUP,
    payload,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;

    case ActionTypes.UPDATE_STATE: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
};

export default reducer;
