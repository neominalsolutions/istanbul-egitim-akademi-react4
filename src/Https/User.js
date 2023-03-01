import axios from "axios";
import React, { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // yapılcak işlemler
    // component ilk init olduğunda api işlemlerini useEffect [] olanında yapalım.

    var c = new AbortController();

    console.log("component doma yüklendi 1 kez çalıştı");
    // sayfa ilk açılışın da eğer sayfaya api dan veri çekmek istersek [] no dependcy olcak şekilde yazmalıydık

    // 1. yöntem (Promise yöntemi)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("f-response", response);
        return response.json(); // veriyi json formatına dönüştür
      })
      .then((data) => {
        // promise chain 2 // senkron olan işlemleri sıralı yaptık
        console.log("data", data);
      })
      .catch((err) => {
        // promise hata durumu
        console.log("promise-err", err);
      });

    // 2. yöntem
    // axios içerisine abordedController ile gönderdiğimiz signal değeri üzerinden istek bitince axios kendisi memory tüketimi olmasın diye istek sonunda işlemi iptal ediyor.
    axios
      .get("https://jsonplaceholder.typicode.com/users", { signal: c.signal })
      .then((response) => {
        console.log("response", "data", response, response.data);
        setUsers([...response.data]);
      })
      .catch((err) => {
        console.log("err", err);
      });

    // 3. yöntem
    // async function içerisinde de await keyword ile axios kullanabiliriz. (fetch de de uygulanaır) async await yöntemi
    const asyncFunc = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      } catch (error) {
        console.log("netoworkerr", error);
      }
    };

    asyncFunc(); // isimden çalıştırma yaptık

    return () => {
      // anonymous çalışan bir function var
      // clean up işlemi
      // yani useEffect domdan kalkınca burası çalışıyor.
      console.log("component domdan kalktı");
      // http kanalına yapılan istekleri kaldırmamız lazım
      // yoksa tarayı fazladan memory hafıza tüketir.
      // axios ile istek atılmadığında bu signal değerini kendimiz abort method sonlandırmalıyız. bunuda clean up işleminde yapmalıyız.
      c.abort(); // api istek işlemini bitir kes. buda performans sağlıyor.
    };
  }, []); // deps kısmı)

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default User;
