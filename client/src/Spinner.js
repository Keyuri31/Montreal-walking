import { useState, CSSProperties } from "react";
import GridLoader from "react-spinners/GridLoader";

const override = {
  display: "block",
  margin: "25% 45%",
  borderColor: "red",
  width:"20%",
};
//loader to display on state mount
const Spinner = () => {
    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#480987");

  return (
    <div className="sweet-loading">
      <div  onChange={(input) => setColor(input.target.value)} />

      <GridLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
 
export default Spinner;