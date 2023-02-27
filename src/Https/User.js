import axios from "axios";
import React, { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // yapılcak işlemler
    // component ilk init olduğunda api işlemlerini useEffect [] olanında yapalım.

    // 1. yöntem
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("f-response", response);
        return response.json(); // veriyi json formatına dönüştür
      })
      .then((data) => {
        console.log("data", data);
      });

    // 2. yöntem
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("response", "data", response, response.data);
      setUsers([...response.data]);
    });

    return () => {
      // clean up işlemi
      // yani useEffect domdan kalkınca burası çalışıyor.
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
