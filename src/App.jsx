
import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import Options from "./components/Options";
import Translation from "./components/Translation";
import { array } from "./components/Aioptions/items";
import { useState } from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

var x=0;
let index=0;
var arr=["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","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"];
function App() {
  const configuration = new Configuration({
    apiKey: arr[index],
  });
  const openai = new OpenAIApi(configuration);
  const [type, setType] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  // console.log(import.meta.env.VITE_Open_AI_Key);
  const selectType = (type) => {
    setType(type);
  };

  const enter = async () => {
    let object = { ...type, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };
  
  x+=1;
  if(x>1000)
  {
  index=1
  }
  console.log(x);
  return (
    <div className="App">
    <><><Header />
      {Object.values(type).length === 0 ? (
        <Options array={array} selectType={selectType} />
      ) : (
        <Translation enter={enter} setInput={setInput} result={result} />
      )}
      </><Footer /></>
    </div>
    
  );
}

export default App;