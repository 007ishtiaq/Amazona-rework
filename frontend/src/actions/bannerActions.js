import Axios from 'axios';
import { BANNER_LIST_FAIL, BANNER_LIST_REQUEST, BANNER_LIST_SUCCESS, BANNER_UPDATE_FAIL, BANNER_UPDATE_REQUEST, BANNER_UPDATE_SUCCESS } from '../constants/bannerConstants';

export const listBanners = () => async (dispatch) => {
  dispatch({
    type: BANNER_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      "/api/banners/"
    );
    dispatch({ type: BANNER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BANNER_LIST_FAIL, payload: error.message });
  }
};

export const updateBanner = (banner) => async (dispatch, getState) => {
    dispatch({ type: BANNER_UPDATE_REQUEST, payload: banner });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(`/api/banners/${banner._id}`, banner, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: BANNER_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: BANNER_UPDATE_FAIL, error: message });
    }
  };