import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("idle");
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div className="header">
          <h1>Będziesz moją walentynką Agatko ?</h1>
          
        
      {status === "accepted" ? (
        <div>
          <h2>Super!<br/> Ty + ja 14 lutego w Gdańsku, wszystko przygotuje</h2>
          <img width={"150px"} src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhyaDJ2em9odnJjZ25ua2h1bDN0NWJ4cml2NmUyaWt5cTk4ZGh6YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif" />
        </div>
      ) : (
        <div>
          <div className="buttonContainer">
        <button className="button" onClick={()=>{
          setStatus("accepted")
        }}>Tak</button>
        <button className="button" onClick={()=>{
          setText("zła odpowiedź")
        }}>Nie</button>
      </div>
      <span className="span">
      {text}
      </span>
        </div>

      )}
      </div>
    </div>
  );
}

export default App;
