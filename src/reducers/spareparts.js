import {
  GET_SPAREPARTS_LIST,
  GET_SPAREPART_DETAIL,
  POST_SPAREPARTS_CREATE,
  PUT_SPAREPARTS_CREATE,
} from "../actions/sparepartsAction";

let initialState = {
  getSparepartsList: false,
  errorSparepartsList: false,
  getSparepartDetail: false,
  errorSparepartDetail: false,
  postSparepartCreate: false,
  errorSparepartCreate: false,
  title: "XTrackX",
};

const spareparts = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPAREPARTS_LIST:
      return {
        ...state,
        getSparepartsList: action.payload.data,
        errorSparepartsList: action.payload.errorMessage,
      };
    case GET_SPAREPART_DETAIL:
      return {
        ...state,
        getSparepartDetail: action.payload.data,
        errorSparepartDetail: action.payload.errorMessage,
      };
    case POST_SPAREPARTS_CREATE:
      return {
        ...state,
        getResponseDataSparepart: action.payload.data,
        errorResponseDataSparepart: action.payload.errorMessage,
      };
    case PUT_SPAREPARTS_CREATE:
      return {
        ...state,
        getResponseDataSparepart: action.payload.data,
        errorResponseDataSparepart: action.payload.errorMessage,
      };

    default:
  }
  return state;
};

export default spareparts;
