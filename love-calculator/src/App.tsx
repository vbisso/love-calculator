import { useState } from "react";
import Button from "./components/Button";
import Results from "./components/Results";
import Inputs from "./components/Inputs";
import Title from "./components/Title";


function LoveCalulator() {

  const [fname, setFName] = useState("");
  const [sname, setSName] = useState("");
  const [result, setResult] = useState("");

  const reset = () => {
    setFName("");
    setSName("");
    setResult("");
    document.getElementById("results")?.setAttribute("hidden", "true");
  };

  const getPercentage = async () => {
    try {
      const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${fname}&fname=${sname}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "665184b717mshfe9d8f121d5c836p1bc83ejsn4b4ab42b80d2",
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setResult(`${data.percentage}% ${data.result}`);
      document.getElementById("results")?.removeAttribute("hidden");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column text-center">

        <Title />

        <div className="d-flex flex-column flex-md-row justify-content-center">
          <Inputs value={fname} name="fname" placeHolder="Enter first name" setSName={setFName}></Inputs>
          <Inputs value={sname} name="sname" placeHolder="Enter second name" setSName={setSName}></Inputs>
        </div>

        <div className="d-grid gap-2 col-12 col-md-6 mx-auto p-3">
          <Button
            buttonLabel="Get Percentage"
            onClick={getPercentage}
            color="primary"
          />
          <Button
            buttonLabel="Reset"
            onClick={reset}
            color="light"
          />
        </div>
        <Results result={result}></Results>
      </div>

    </div>

  );
}

export default LoveCalulator;
