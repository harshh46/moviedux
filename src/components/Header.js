import React from "react";
import "../styles.css";

export default function Header() {
  return (
    //can return only one parent element in html then we can write number of elements inside that one parent element

    //    <> </> its called fragment in react
    <div>
      {/* in alt we can write anything so if the image is not displayed because of any error then the alt will be displayed */}
      <img className="logo" src="logo.png" alt="Moviedux" />

      <h2 className="app-subtitle">
        {" "}
        It's time for popcorn! Find your next movie here.
      </h2>
    </div>
  );
}
