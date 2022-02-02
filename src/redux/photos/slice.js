const initialState = {
  list: [],
  related: {},
  detail: {},
};

export const ActionTypes = {
  SET_PHOTOS: '@PHOTOS/SET_PHOTOS',
  GET_PHOTOS: '@PHOTOS/GET_PHOTOS',

  SET_PHOTOS_BY_ID: '@PHOTOS/SET_PHOTOS_BY_ID',
  GET_PHOTOS_BY_ID: '@PHOTOS/GET_PHOTOS_BY_ID',

  SET_PHOTOS_RELATED: '@PHOTOS/SET_PHOTOS_RELATED',
  GET_PHOTOS_RELATED: '@PHOTOS/GET_PHOTOS_RELATED',
};

export const ActionCreators = {

  setPhotos: (payload) => ({
    type: ActionTypes.SET_PHOTOS,
    payload,
  }),

  getPhotos: (payload) => ({
    type: ActionTypes.GET_PHOTOS,
    payload,
  }),

  setPhotosById: (payload) => ({
    type: ActionTypes.SET_PHOTOS_BY_ID,
    payload,
  }),

  getPhotosById: (payload) => ({
    type: ActionTypes.GET_PHOTOS_BY_ID,
    payload,
  }),

  setPhotosRelated: (payload) => ({
    type: ActionTypes.SET_PHOTOS_RELATED,
    payload,
  }),

  getPhotosRelated: (payload) => ({
    type: ActionTypes.GET_PHOTOS_RELATED,
    payload,
  }),

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PHOTOS: {
      return {
        ...state,
        list: action.payload,
      };
    }
    case ActionTypes.SET_PHOTOS_BY_ID: {
      return {
        ...state,
        detail: {
          ...state.detail,
          [action.payload.id]: action.payload,
        },
      };
    }

    case ActionTypes.SET_PHOTOS_RELATED: {
      return {
        ...state,
        related: {
          ...state.related,
          [action.payload.id]: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
