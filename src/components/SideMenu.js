import React from "react";
import "./index.css";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div
        className="container col-12"
        style={{
          padding: "0%",
          // overflow: "auto",
          height: "auto",
          marginTop: "3%",
          marginBottom: "3%",
          // height: "650px",
          border: "solid 2px white",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h4
          style={{
            marginTop: "2%",
            alignSelf: "center",
            color: "white",
            fontFamily: "Jazz LET, fantasy",
            letterSpacing: "3px"
          }}
        >
          Wines
        </h4>
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Jazz LET, fantasy",
            letterSpacing: "3px"
          }}
        >
          <small>We pour 5 oz. of wine by the glass in a 12 oz. glass</small>
        </p>
        <div
          className="col-12"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <div className="wines">
            <h5 style={wineStyle}>
              <u style={wineStyle}> Whites</u>
            </h5>
            <p style={whiteWine}>
              <b>{"* Champagne & Sparkling"}</b>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flexStart",
                flexDirection: "column",
                marginBottom: "4%",
                marginTop: "0%"
              }}
            >
              <p style={listItemStyle}>
                <small>1. Chandon, Brut Classic</small>
              </p>
              <p style={listItemStyle}>
                <small> 2.Roederer Estate, Brut </small>
              </p>
              <p style={listItemStyle}>
                <small>3. Moet Imperial, Brut </small>
              </p>
              <p style={listItemStyle}>
                <small>4. Domaine Carneros by Tattinger</small>
              </p>
              <p style={listItemStyle}>
                <small>5. Perrier-Jouet</small>
              </p>
            </div>
            <p style={whiteWine}>
              <b>* Sauvignon Blanc</b>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flexStart",
                flexDirection: "column",
                marginBottom: "4%",
                marginTop: "0%"
              }}
            >
              <p style={listItemStyle}>
                <small>6. Whitehaven, Marlborough</small>
              </p>
              <p style={listItemStyle}>
                <small>7. Cloudy Bay, Wairau Valley </small>
              </p>
              <p style={listItemStyle}>
                <small>8. Duckhorn, 'Decoy' </small>
              </p>
            </div>
            <p style={whiteWine}>
              <b>* Pinot Grigio</b>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flexStart",
                flexDirection: "column",
                marginBottom: "4%",
                marginTop: "0%"
              }}
            >
              <p style={listItemStyle}>
                <small>9. Tenuta Ca' Bolani </small>
              </p>
              <p style={listItemStyle}>
                <small>10. Lange, Pinot Gris </small>
              </p>
              <p style={listItemStyle}>
                <small>11. Anterra, Delle Venezie</small>
              </p>
              <p style={listItemStyle}>
                <small>12. Maso Canali, Italy </small>
              </p>
              <p style={listItemStyle}>
                <small>13. Santa Margherita, Alto</small>
              </p>
            </div>
          </div>
          <div className="wines" style={{ marginLeft: "4%" }}>
            <h5 style={wineStyle}>
              <u style={wineStyle}>Reds</u>
            </h5>
            <p style={whiteWine}>{"* Pinot Noir"}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flexStart",
                flexDirection: "column",
                marginBottom: "4%",
                marginTop: "0%"
              }}
            >
              <p style={listItemStyle}>
                <small>1. Parket Station, Central Coast</small>
              </p>
              <p style={listItemStyle}>
                <small>2. Sterling, "Vintner's Collection" </small>
              </p>
              <p style={listItemStyle}>
                <small>3. Williamette Valley Estate </small>
              </p>
              <p style={listItemStyle}>
                <small>4. Lucienne, Santa Lucia </small>
              </p>
            </div>
            <p style={whiteWine}>{"* Merlot"}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flexStart",
                flexDirection: "column",
                marginBottom: "4%",
                marginTop: "0%"
              }}
            >
              <p style={listItemStyle}>
                <small>5. Napa Cellars, Oak Knoll</small>
              </p>
              <p style={listItemStyle}>
                <small>6. Matanzas Creek, Sonoma </small>
              </p>
              <p style={listItemStyle}>
                <small>7. Chateau Ste. Michelle, 'Canoe Ridge' </small>
              </p>
              <p style={listItemStyle}>
                <small>8. William Hill Merlot</small>
              </p>
            </div>
            <p style={whiteWine}>{"* Interesting Reds"}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flexStart",
                flexDirection: "column",
                marginBottom: "4%",
                marginTop: "0%"
              }}
            >
              <p style={listItemStyle}>
                <small>9. Achaval-Ferrer, Malbec </small>
              </p>
              <p style={listItemStyle}>
                <small>10. Rosenblum, Petite Sirah </small>
              </p>
              <p style={listItemStyle}>
                <small>11. Michael David, " Lust " </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const whiteWine = {
  fontWeight: "bold",
  color: "white",
  fontFamily: "Jazz LET, fantasy",
  margin: "3% 0 0 0",
  padding: "0"
};
const listItemStyle = {
  // textAlign: "center",
  color: "white",
  fontFamily: "Jazz LET, fantasy",
  margin: "0% 0% 0% 3%",
  padding: "0%"
};
const wineStyle = {
  // textAlign: "center",
  color: "white",
  fontFamily: "Jazz LET, fantasy",
  letterSpacing: "3px"
};
export default SideMenu;
