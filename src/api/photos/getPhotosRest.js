import {unsplashApi} from "../../lib/unsplashApi";
import {API_KEY} from "../../constants/common";

//export const getPhotosRest = (payload) => unsplashApi('get', '/photos', payload);

export const getPhotosRest = async (payload) => {
    try {
        const { data } = await unsplashApi({
            url: '/photos',
            method: 'get',
            params: payload,
            headers: {
                Authorization: API_KEY,
            },
        });
        return data;
    } catch (err) {
        throw new Error(err)
    }
}

