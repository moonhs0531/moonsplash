const initialState = {
  photos: {
    results: [],
  },
  collections: {
    results: [],
  },
  users: {
    results: [],
  },
};

export const ActionTypes = {

  GET_SEARCH: '@SEARCH/SET_SEARCH',
  SET_SEARCH: '@SEARCH/GET_SEARCH',

  SET_SEARCH_PHOTOS: '@SEARCH/SET_SEARCH_PHOTOS',
  GET_SEARCH_PHOTOS: '@SEARCH/GET_SEARCH_PHOTOS',

  SET_SEARCH_COLLECTIONS: '@SEARCH/SET_SEARCH_COLLECTIONS',
  GET_SEARCH_COLLECTIONS: '@SEARCH/GET_SEARCH_COLLECTIONS',

  SET_SEARCH_USERS: '@SEARCH/SET_SEARCH_USERS',
  GET_SEARCH_USERS: '@SEARCH/GET_SEARCH_USERS',

};

export const ActionCreators = {

  setSearch: (payload) => ({
    type: ActionTypes.SET_SEARCH,
    payload,
  }),
  getSearch: (payload) => ({
    type: ActionTypes.GET_SEARCH,
    payload,
  }),

  setSearchPhotos: (payload) => ({
    type: ActionTypes.SET_SEARCH_PHOTOS,
    payload,
  }),
  getSearchPhotos: (payload) => ({
    type: ActionTypes.GET_SEARCH_PHOTOS,
    payload,
  }),

  setSearchCollections: (payload) => ({
    type: ActionTypes.SET_SEARCH_COLLECTIONS,
    payload,
  }),
  getSearchCollections: (payload) => ({
    type: ActionTypes.GET_SEARCH_COLLECTIONS,
    payload,
  }),

  setSearchUsers: (payload) => ({
    type: ActionTypes.SET_SEARCH_USERS,
    payload,
  }),
  getSearchUsers: (payload) => ({
    type: ActionTypes.GET_SEARCH_USERS,
    payload,
  }),

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_PHOTOS: {
      return {
        ...state,
        photos: action.payload,
      };
    }
    case ActionTypes.SET_SEARCH_COLLECTIONS: {
      return {
        ...state,
        collections: action.payload,
      };
    }
    case ActionTypes.SET_SEARCH_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case ActionTypes.SET_SEARCH: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
