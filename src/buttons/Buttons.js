import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import "./buttons.css";

function Buttons() {
  const { setData } = useContext(CartContext);
  function myInputData(event) {
    const searchData = event.target.value;
    const resultSearch = searchData ? searchData : "mixed";
    setData(resultSearch);
  }
  return (
    <div className="test">
      <div className="buttons__block">
        <div className="buttons__element">
          <div className="select__btn">
            <button onClick={() => setData("mixed")}>Mixed</button>
            <button onClick={() => setData("ocean")}>Ocean</button>
            <button onClick={() => setData("road")}>Road</button>
            <button onClick={() => setData("creative")}>Creative</button>
          </div>
          <div className="search">
            <form action="">
              <input
                type="search"
                placeholder="enter the category"
                onChange={myInputData}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
