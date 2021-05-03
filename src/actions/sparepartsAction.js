import axios from "axios";

export const GET_SPAREPARTS_LIST = "GET_SPAREPARTS_LIST";
export const GET_SPAREPART_DETAIL = "GET_SPAREPARTS_DETAIL";
export const POST_SPAREPARTS_CREATE = "POST_SPAREPARTS_CREATE";
export const PUT_SPAREPARTS_CREATE = "PUT_SPAREPARTS_CREATE";

export const getSparepartsList = () => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/yurvanigo/reactjs-db/spareparts")
      .then(function (response) {
        // handle success
        dispatch({
          type: GET_SPAREPARTS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: GET_SPAREPARTS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getSparepartDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "http://my-json-server.typicode.com/yurvanigo/reactjs-db/spareparts/" +
          id
      )
      .then(function (response) {
        // handle success
        dispatch({
          type: GET_SPAREPART_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: GET_SPAREPART_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const postSparepartCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "http://my-json-server.typicode.com/yurvanigo/reactjs-db/spareparts",
        data
      )
      .then(function (response) {
        // handle success
        dispatch({
          type: POST_SPAREPARTS_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: POST_SPAREPARTS_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putSparepartUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "http://my-json-server.typicode.com/yurvanigo/reactjs-db/spareparts/" +
          id,
        data
      )
      .then(function (response) {
        // handle success

        dispatch({
          type: PUT_SPAREPARTS_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: PUT_SPAREPARTS_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteSparepart = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "http://my-json-server.typicode.com/yurvanigo/reactjs-db/spareparts/" +
          id
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataSparepart = () => {
  return (dispatch) => {
    dispatch({
      type: GET_SPAREPART_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
    dispatch({
      type: POST_SPAREPARTS_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
