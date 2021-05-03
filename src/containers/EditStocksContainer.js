import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import {
  getSparepartDetail,
  putSparepartUpdate,
} from "../actions/sparepartsAction";
import swal from "sweetalert";

const mapStateProps = (state) => {
  return {
    getResponseDataSparepart: state.spareparts.getResponseDataSparepart,
    errorResponseDataSparepart: state.spareparts.errorResponseDataSparepart,
  };
};

class EditStocksContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getSparepartDetail(this.props.match.params.id));
  }
  handleSubmit(data) {
    this.props.dispatch(putSparepartUpdate(data, this.props.match.params.id));
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
        "Sparepart Updated!",
        "Name : " +
          this.props.getResponseDataSparepart.name +
          ", Brand : " +
          this.props.getResponseDataSparepart.brand +
          ", Price : " +
          this.props.getResponseDataSparepart.price +
          ", Size " +
          this.props.getResponseDataSparepart.size +
          "",
        "success"
      );
    }
    return (
      <Container>
        <BackComponent />
        <h1> EDIT STOCKS</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateProps, null)(EditStocksContainer);
