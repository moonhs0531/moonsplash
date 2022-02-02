import { unsplashApi } from '../../lib/unsplashApi';
import { API_KEY } from '../../constants/common';

// export const getSearchPhotosRest = (payload) => unsplashApi('get', '/search/photos', payload);

export const getSearchRest = async (payload) => {
  try {
    const { data } = await unsplashApi({
      url: '/search',
      method: 'get',
      params: payload,
      headers: {
        Authorization: API_KEY,
      },
    });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
