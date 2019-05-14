import React from "react";
import Menu from "./Menu";
import TabsDisplay from "./TabsDisplay";
import SideMenu from "./SideMenu";
import "./index.css";
function App() {
  return (
    <div style={{ width: "100%" }}>
      <div
        className="parallax"
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
            // backgroundColor: "black",
            alignSelf: "center",
            border: "solid 4px black",
            marginBottom: "3%"
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "black",
              fontFamily: "Snell Roundhand, cursive"
            }}
          >
            On Our Menu Today
          </h1>
        </div>
      </div>

      <div className="App col-12">
        <div
          className="col-12"
          style={{
            // height: "700px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          <TabsDisplay /> <SideMenu />
        </div>
      </div>
      <div className="parallax" />
    </div>
  );
}

export default App;
