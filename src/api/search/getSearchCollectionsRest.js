import { unsplashApi } from "../../lib/unsplashApi";
import { API_KEY } from "../../constants/common";

export const getSearchCollectionsRest = async (payload) => {
     try{
         const { data } = await unsplashApi({
             url: '/search/collections',
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
