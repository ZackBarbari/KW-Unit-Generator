import InputBox from "./components/InputBox";
import UnitCard from "./components/UnitCard";
import html2canvas from "html2canvas";
import { useState, useRef } from "react";
import defaults from "./constants/statics/defaults";

const App = () => {
  const [body, setBody] = useState(defaults);
  const printRef = useRef();

  const modifyCard = (body) => {
    //console.log("type: " + body.unit)
    setBody(body)
  }

  const downloadCard = async () => {
    //console.log(printRef.current)
    const element = printRef.current;
    const canvas = await html2canvas(element,{scale:2});
    
    const data = canvas.toDataURL('image/jpg');
    var link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = `${body.name}.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
      
  }

  return (
    <>
    <div className="pagebase">
      <h1>Kingdoms and Warfare</h1>
      <h2>Unit Card Generator</h2>
      <InputBox onMod={modifyCard}/>
      <UnitCard {...body} ref={printRef}/>
      <button type="button" onClick={downloadCard}>
        Download as Image
      </button>
    </div>
    </>
  );
}

export default App;