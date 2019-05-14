import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { changeMenu } from "../actions";
class TabsDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: "breakfast"
    };
  }
  changeMenu = menu => {
    this.setState({ menu });
    this.props.changeMenu(menu);
  };
  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="col-lg-8 col-sm-12"
      >
        <div
          // className="container col-lg-8 col-sm-12"
          style={{
            marginTop: "3%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <div
            className="col-lg-3 col-sm-12  border-button"
            onClick={() => this.changeMenu("breakfast")}
          >
            <h1
              style={{
                fontFamily: "Snell Roundhand, cursive",
                textAlign: "center",
                color: "white"
              }}
            >
              {this.state.menu === "breakfast" ? <u>Breakfast</u> : "Breakfast"}
            </h1>
          </div>
          <div
            className="col-lg-3 col-sm-12  border-button"
            onClick={() => this.changeMenu("lunch")}
          >
            <h1
              style={{
                fontFamily: "Snell Roundhand, cursive",
                textAlign: "center",
                color: "white"
              }}
            >
              {this.state.menu === "lunch" ? <u>Lunch</u> : "Lunch"}
            </h1>
          </div>

          <div
            className="col-lg-3 col-sm-12  border-button"
            onClick={() => this.changeMenu("dinner")}
          >
            <h1
              style={{
                fontFamily: "Snell Roundhand, cursive",
                textAlign: "center",
                color: "white"
              }}
            >
              {this.state.menu === "dinner" ? <u>Dinner</u> : "Dinner"}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dish: state.dish
  };
};
export default connect(
  mapStateToProps,
  { changeMenu }
)(TabsDisplay);
