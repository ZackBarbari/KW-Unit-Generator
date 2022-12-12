import InputBox from "./components/InputBox";
import UnitCard from "./components/UnitCard";
import { useState } from "react";

const App = () => {
  const [body, setBody] = useState();

  const modifyCard = (body) => {
    //console.log("type: " + body.unit)
    setBody(body)
  }

  return (
    <>
    <div className="App">
      <h1>Kingdoms and Warfare</h1>
      <h2>Unit Card Generator</h2>
      <InputBox onMod={modifyCard}/>
      <UnitCard {...body} />
    </div>
    </>
  );
}

export default App;