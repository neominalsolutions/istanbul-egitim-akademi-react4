import logo from "./logo.svg";
import "./App.css";
import Counter from "./useEffectHooks/Counter";
import User from "./Https/User";
import PromisesSample from "./promises/PromisesSample";
import { useState } from "react";
import Interval from "./Https/Interval";

function App() {
  // User Componenti göster gizle uygulaması ile component doma giriş çıkış yapacak ve clean up function tetiklenecek.

  const [show, setshow] = useState(true);

  return (
    <div className="App">
      {/* proplar opsition veya required olarak tanımlanmıyorlar değerleri göndermeyi unutabiliriz */}

      <input
        type="checkbox"
        defaultChecked={show}
        onChange={(event) => {
          console.log("chekced", event.target.checked);
          setshow(event.target.checked);
        }}
      />
      <span>Göster/Gizle</span>

      {show && <User />}
      {/* show değeri true ise componenti göster */}

      {/* <Counter name="ali" /> */}
      {/* <PromisesSample /> */}

      {/* Interval Component */}

      {show && <Interval />}
    </div>
  );
}

export default App;
