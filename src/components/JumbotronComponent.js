import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

const mapStateProps = (state) => {
  return {
    title: state.spareparts.title,
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <Container>
            <h1 className="display-4" color="red">
              {props.title}
            </h1>
            <p className="lead">
              One of the trading company and Distributor of Full Range of
              Automotive Spare Parts in <FontAwesomeIcon />
            </p>
          </Container>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateProps, null)(JumbotronComponent);
