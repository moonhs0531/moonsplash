const initialState = {
    list: [],
}

export const ActionTypes = {
    SET_PHOTOS: '@PHOTOS/SET_PHOTOS',
    GET_PHOTOS: '@PHOTOS/GET_PHOTOS'
}

export const ActionCreators = {

    //payload를 인자 값으로 안 넣으면 왜 오류가 나는지?
    setPhotos: (payload) => {
        return {
            type:ActionTypes.SET_PHOTOS,
            payload
        }
    },

    getPhotos: (payload) => {
        return {
            type:ActionTypes.GET_PHOTOS,
            payload
        }
    }

}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case ActionTypes.SET_PHOTOS: {

            return{
                ...state,
                list: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;
