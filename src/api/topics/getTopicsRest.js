import { unsplashApi } from '../../lib/unsplashApi';
import { API_KEY } from '../../constants/common';

// export const getTopicsRest = (payload) => unsplashApi('get', '/topics', payload);

export const getTopicsRest = async (payload) => {
  try {
    const { data } = await unsplashApi({
      url: '/topics',
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
