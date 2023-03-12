import { BANNER_LIST_FAIL, BANNER_LIST_REQUEST, BANNER_LIST_SUCCESS, BANNER_UPDATE_FAIL, BANNER_UPDATE_REQUEST, BANNER_UPDATE_SUCCESS,BANNER_UPDATE_RESET } from '../constants/bannerConstants';

export const bannerListReducer = (
  state = { loading: true, banners: [] },
  action
) => {
  switch (action.type) {
    case BANNER_LIST_REQUEST:
      return { loading: true };
    case BANNER_LIST_SUCCESS:
      return {
        loading: false,
        banners: action.payload,
      };
    case BANNER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bannerUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case BANNER_UPDATE_REQUEST:
        return { loading: true };
      case BANNER_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case BANNER_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case BANNER_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };