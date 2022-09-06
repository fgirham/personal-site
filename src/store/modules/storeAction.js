import { QUERY_ALL_PRODUCT } from "constants/apis";
import request from "utils/request";
import { storeAction } from "./storeSlice";

export const fetchStoreProducts = () => {
  return (dispatch) => {
    request(QUERY_ALL_PRODUCT, {}).then((data) => {
      dispatch(
        storeAction.setProducts({
          data: data,
        })
      );
    });
  };
};
