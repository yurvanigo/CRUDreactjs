import React from "react";
import { connect } from "react-redux";
import { Table, Container } from "reactstrap";

const mapStateProps = (state) => {
  return {
    getSparepartDetail: state.spareparts.getSparepartDetail,
    errorSparepartDetail: state.spareparts.errorSparepartDetail,
  };
};

const DetailSparepartComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Name</td>
          <td width="10">:</td>
          <td>{props.getSparepartDetail.name}</td>
        </tr>
        <tr>
          <td width="200">Brand</td>
          <td width="10">:</td>
          <td>{props.getSparepartDetail.brand}</td>
        </tr>
        <tr>
          <td width="200">Price</td>
          <td width="10">:</td>
          <td>{props.getSparepartDetail.price}</td>
        </tr>
        <tr>
          <td width="200">Size</td>
          <td width="10">:</td>
          <td>{props.getSparepartDetail.size}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateProps, null)(DetailSparepartComponent);
