import logo from "./logo.svg";
import "./App.css";
import Counter from "./useEffectHooks/Counter";
import User from "./Https/User";
import PromisesSample from "./promises/PromisesSample";

function App() {
  return (
    <div className="App">
      {/* proplar opsition veya required olarak tanımlanmıyorlar değerleri göndermeyi unutabiliriz */}
      {/* <User /> */}
      {/* <Counter name="ali" /> */}
      <PromisesSample />
    </div>
  );
}

export default App;
