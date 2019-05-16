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
  renderDishes = () => {
    return this.props.dish.map((dish, i) => {
      return (
        <li
          key={i}
          className="col-lg-3 col-md-4 col-sm-12 foodItem"
          style={{
            alignSelf: "flex-start",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
            // marginBottom: "2%"
          }}
        >
          <p
            className="foodItem"
            style={{ fontFamily: "Didot, serif	", fontSize: "20px" }}
          >
            <u>
              <b> {dish.meal}</b>
            </u>
          </p>
          <p style={{ fontFamily: "Didot, serif	", fontSize: "15px" }}>
            {dish.description}
            {`$${dish.price}`}
          </p>
        </li>
      );
    });
  };
  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="col-12"
      >
        <div
          className="col-12"
          style={{
            padding: "0%",
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
        {/* ////////
         */}
        <ol
          className="container col-10 foodItem"
          style={{
            listStyle: "none",
            alignSelf: "center",
            marginTop: "3%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "flex-start",
            alignItems: "flex-start",
            justifyContent: "space-between"
          }}
        >
          {this.renderDishes()}
        </ol>
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
