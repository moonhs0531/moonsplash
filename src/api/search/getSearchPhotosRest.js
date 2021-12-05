import { unsplashApi } from "../../lib/unsplashApi";
import { API_KEY } from "../../constants/common";

//export const getSearchPhotosRest = (payload) => unsplashApi('get', '/search/photos', payload);

export const getSearchPhotosRest = async (payload) => {
     try {
         const { data } = await unsplashApi({
             url: '/search/photos',
             method: 'get',
             params: payload,
             headers: {
                 Authorization: API_KEY,
             }
         });
         return data;
     } catch (err) {
         throw new Error(err)
     }
 }
