import LikeButton from "./LikeButton";
import "./App.css"

function Car({brand}) {
  return (
    <>
    <h2>I am a Car!</h2>
    <h3>{brand}</h3>
    </>
  );
}

// dry run

// app --> garage --> brand bmw pass to function --> then h2 print then h3 then --> brand audi pass to function --> then h2 print then h3 then

function Garage() {
  return (
    <>
      <h1>Rendering a Component Twice</h1>
      <Car brand = "bmw"/>
      <Car brand = "audi" />
    </>
  );
}



function App() {
  return(
    <>
    <Garage />
    <LikeButton />
    </>
  )
}
export default App