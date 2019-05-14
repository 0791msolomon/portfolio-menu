import React from "react";
import Menu from "./Menu";
import TabsDisplay from "./TabsDisplay";
import SideMenu from "./SideMenu";
import "./index.css";
function App() {
  return (
    <div style={{ width: "100%" }}>
      <div
        className="smallparallax"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <div
          className="col-6"
          style={{
            alignSelf: "center",
            border: "solid 4px black",
            marginBottom: "3%"
          }}
        >
          <div
            className="display-4"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "black",
              fontFamily: "Snell Roundhand, cursive"
            }}
          >
            On Our Menu Today
          </div>
        </div>
      </div>

      <div className="App col-12">
        <div
          className="col-12"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          <TabsDisplay />
          <SideMenu />
        </div>
      </div>
      <div className="smallparallax" />
    </div>
  );
}

export default App;
