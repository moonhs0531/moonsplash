import { unsplashApi } from '../../lib/unsplashApi';
import { API_KEY } from '../../constants/common';

// export const getSearchUsersRest = (payload) => unsplashApi('get', '/search/users', payload);

export const getSearchUsersRest = async (payload) => {
  try {
    const { data } = await unsplashApi({
      url: '/search/users',
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
