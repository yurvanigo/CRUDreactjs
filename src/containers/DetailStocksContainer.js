import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getSparepartDetail } from "../actions/sparepartsAction";
import DetailSparepartComponent from "../components/DetailSparepartComponent";

class DetailStocksContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getSparepartDetail(this.props.match.params.id));
  }
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>DETAIL SPAREPART</h1>
        <DetailSparepartComponent />
      </Container>
    );
  }
}
export default connect()(DetailStocksContainer);
