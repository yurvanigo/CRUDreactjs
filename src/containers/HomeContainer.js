import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import {
  getSparepartsList,
  deleteDataSparepart,
} from "../actions/sparepartsAction";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getSparepartsList());
    this.props.dispatch(deleteDataSparepart());
  }
  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
