import React from "react";
import "./index.css";
class TabsDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div
        className="container col-lg-8 col-sm-12"
        style={{
          marginTop: "3%",
          // textAlign: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        <div className="col-lg-3 col-sm-12  border-button">
          <h1
            style={{
              fontFamily: "Snell Roundhand, cursive",
              textAlign: "center",
              color: "white"
            }}
          >
            Breakfast
          </h1>
        </div>
        <div className="col-lg-3 col-sm-12  border-button">
          <h1
            style={{
              fontFamily: "Snell Roundhand, cursive",
              textAlign: "center",
              color: "white"
            }}
          >
            Lunch
          </h1>
        </div>

        <div className="col-lg-3 col-sm-12  border-button">
          <h1
            style={{
              fontFamily: "Snell Roundhand, cursive",
              textAlign: "center",
              color: "white"
            }}
          >
            Dinner
          </h1>
        </div>
      </div>
    );
  }
}
export default TabsDisplay;
