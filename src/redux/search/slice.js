const initialState = {
    photos: {},
    collections: {},
    users: {}
}

export const ActionTypes = {
    SET_SEARCH_PHOTOS: '@SEARCH/SET_SEARCH_PHOTOS',
    GET_SEARCH_PHOTOS: '@SEARCH/GET_SEARCH_PHOTOS',

    SET_SEARCH_COLLECTIONS: '@SEARCH/SET_SEARCH_COLLECTIONS',
    GET_SEARCH_COLLECTIONS: '@SEARCH/GET_SEARCH_COLLECTIONS',

    SET_SEARCH_USERS: '@SEARCH/SET_SEARCH_USERS',
    GET_SEARCH_USERS: '@SEARCH/GET_SEARCH_USERS'
}

export const ActionCreators = {

    //payload를 인자 값으로 안 넣으면 왜 오류가 나는지?
    setSearchPhotos: (payload) => {
        return {
            type:ActionTypes.SET_SEARCH_PHOTOS,
            payload
        }
    },
    getSearchPhotos: (payload) => {
        return {
            type:ActionTypes.GET_SEARCH_PHOTOS,
            payload
        }
    },


    setSearchCollections: (payload) => {
        return {
            type:ActionTypes.SET_SEARCH_COLLECTIONS,
            payload
        }
    },
    getSearchCollections: (payload) => {
        return {
            type:ActionTypes.GET_SEARCH_COLLECTIONS,
            payload
        }
    },


    setSearchUsers: (payload) => {
        return {
            type:ActionTypes.SET_SEARCH_USERS,
            payload
        }
    },
    getSearchUsers: (payload) => {
        return {
            type:ActionTypes.GET_SEARCH_USERS,
            payload
        }
    },
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.SET_SEARCH_PHOTOS: {
            return{
                ...state,
                photos: action.payload
            }
        }
        case ActionTypes.SET_SEARCH_COLLECTIONS: {
            return{
                ...state,
                collections: action.payload
            }
        }
        case ActionTypes.SET_SEARCH_USERS: {
            return{
                ...state,
                users: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;
