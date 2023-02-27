import logo from "./logo.svg";
import "./App.css";
import Counter from "./useEffectHooks/Counter";

function App() {
  return (
    <div className="App">
      {/* proplar opsition veya required olarak tanımlanmıyorlar değerleri göndermeyi unutabiliriz */}
      <Counter name="ali" />
    </div>
  );
}

export default App;
