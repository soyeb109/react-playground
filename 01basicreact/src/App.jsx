import Soyeb from "./Soyeb";

function App() {
  const username = "soyeb islam";

  return (
    <>
      <Soyeb />

      <h1>React practice</h1>
      {<p>My name is {username} </p>}
    </>
  );
}

export default App;
