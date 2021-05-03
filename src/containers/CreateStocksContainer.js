import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postSparepartCreate } from "../actions/sparepartsAction";
import swal from "sweetalert";

const mapStateProps = (state) => {
  return {
    getResponseDataSparepart: state.spareparts.getResponseDataSparepart,
    errorResponseDataSparepart: state.spareparts.errorResponseDataSparepart,
  };
};

class CreateStocksContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postSparepartCreate(data));
  }

  render() {
    if (
      this.props.getResponseDataSparepart ||
      this.props.getResponseDataSparepart
    ) {
      if (this.props.errorResponseDataSparepart) {
        swal("Failed!", this.props.getResponseDataSparepart.name + "error");
      }
      swal(
        "Sparepart Created!",
        "Name : " +
          this.props.getResponseDataSparepart.name +
          ", Brand : " +
          this.props.getResponseDataSparepart.brand +
          "price : " +
          this.props.getResponseDataSparepart.price +
          ", size " +
          this.props.getResponseDataSparepart.size +
          "",
        "success"
      );
    }
    return (
      <Container>
        <BackComponent />

        <h1> Create Stocks </h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
export default connect(mapStateProps, null)(CreateStocksContainer);
