import { unsplashApi } from '../../lib/unsplashApi';
import { API_KEY } from '../../constants/common';

export const getPhotoByIdRest = async (payload) => {
  try {
    const { data } = await unsplashApi({
      url: `/photos/${payload}`,
      method: 'get',
      headers: {
        Authorization: API_KEY,

      },
    });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
