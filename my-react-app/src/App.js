import logo from './logo.svg';
import './App.css';
//import {toPng} from 'html-to-image';
import domtoimage from 'dom-to-image';
import {useState} from "react";
import nose from '../src/alpaca/nose.png';
import {backgrounds,assessories,ears,eyes,hairs,legs,mouths,necks,} from "./objects";
function App() {
  const [background,setbackground] = useState(backgrounds.default);
  const [neck,setnecks] = useState(necks.default);
  const [accessory,setaccessory] = useState(assessories.default);
  const [leg,setleg] = useState(legs.default);
  const [hair,sethair] = useState(hairs.default);
  const [ear,setear] = useState(ears.default);
  const [eye,seteye] = useState(eyes.default);
  const [mouth,setmouth] = useState(mouths.default);
  const [current_attribute,setattribute] = useState("");
  const [currentAccessory,setCurrentAccessory]= useState("background")
  const changeAccessory = (key) => {
    if (currentAccessory == "background") {
      setbackground(backgrounds[key]);
    } else if (currentAccessory == "hairs") {
      sethair(hairs[key]);
    } else if (currentAccessory == "accessories") {
      setaccessory(assessories[key]);
    } else if (currentAccessory == "ears") {
      setear(ears[key]);
    } else if (currentAccessory == "eyes") {
      seteye(eyes[key]);
    } else if (currentAccessory == "necks") {
      setnecks(necks[key]);
    } else if (currentAccessory == "legs") {
      setleg(legs[key]);
    } else {
      setmouth(mouths[key]);
    }
  };

  const onCapture = (id) => {
    domtoimage.toJpeg(document.getElementById(id)) .then(function (dataUrl) {
      //download(dataUrl,'my-image-name.png');
      var link = document.createElement('a');
      link.download = "my-image-name.jpg";
      link.href = dataUrl;
      link.click();
    });
  };

  const randomize =() => {
    var keys = Object.keys(backgrounds);
    setbackground(backgrounds[keys[Math.floor(Math.random()*keys.length)]]);
    keys = Object.keys(assessories);
    setaccessory(assessories[keys[Math.floor(Math.random()*keys.length)]]);
    keys = Object.keys(ears);
    setear(ears[keys[Math.floor(Math.random()*keys.length)]]);
    keys = Object.keys(hairs);
    sethair(hairs[keys[Math.floor(Math.random()*keys.length)]]);
    keys = Object.keys(eyes);
    seteye(eyes[keys[Math.floor(Math.random()*keys.length)]]);
    keys = Object.keys(legs);
    setleg(legs[keys[Math.floor(Math.random()*keys.length)]]);
    keys = Object.keys(mouths);
    setmouth(mouths[keys[Math.floor(Math.random()*keys.length)]]);
    keys = Object.keys(necks);
    setnecks(necks[keys[Math.floor(Math.random()*keys.length)]]);
  };
  return (
    <body className = "App-header">
      <div >
        <h1 className= "App"> alpaca generator</h1>
        <div id ="image">
        <img src={background} className="Pic" width="500px" height="600px"/>
        <img src={neck} className="Pic2" width="500px" height="500px"/>
        <img src={hair} className="Pic4" width="600px" height="600px"/>
        <img src={ear} className="Pic5" width="600px" height="600px"/>
        <img src={eye} className="Pic6"/>
        <img src={accessory} className="Pic8" width="600px" height="700px"/>
        <img src={nose} className="Pic1" width="500px" height="500px"/>
        <img src={mouth} className="Pic7"height="600px"/>
        <img src={leg} className="Pic3" width="600px" height="700px"/>
        </div>
        <div>
         <h6 className="Text"> accessorize the alpaca</h6>
         <h6 className="Text2"> style</h6>
         <button className = "button third" onClick={()=> onCapture("image")}> download </button>
         <button className = "button fourth"onClick={()=> randomize()}> randomize </button>
         <button className = "button primary" onClick={()=> {
          setattribute(backgrounds);
          setCurrentAccessory("background");
         }} value={backgrounds}> backgrounds </button>
         <button className = "button primary" onClick={()=> {
          setattribute(hairs);
          setCurrentAccessory("hairs");
         }}> hairs </button>
         <button className = "button primary" onClick={()=> {
          setattribute(assessories);
          setCurrentAccessory("accessories");
         }}> accessories </button>
         <button className = "button primary"onClick={()=> {
          setattribute(ears);
          setCurrentAccessory("ears");
         }}> ears </button>
         <button className = "button primary"onClick={()=> {
          setattribute(eyes);
          setCurrentAccessory("eyes");
         }}> eyes </button>
         <button className = "button primary"onClick={()=> {
          setattribute(necks);
          setCurrentAccessory("necks");
         }}> necks </button>
         <button className = "button primary"onClick={()=> {
          setattribute(legs);
          setCurrentAccessory("legs");
         }}> legs </button>
         <button className = "button primary"onClick={()=> {
          setattribute(mouths);
          setCurrentAccessory("mouths");
         }}> mouths </button>
         <div>
         {Object.entries(current_attribute).map(([key,value]) => (
          <button className="button secondary" onClick={()=>changeAccessory(key)
          }> {key}</button>
         ))}
         </div>
        </div>
      </div>
    </body>
  );
}

export default App;
