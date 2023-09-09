import React, { useRef, useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const userRef = useRef(null);
  const userNameHandler = (event) => {
    setUserName(event.target.value);
    if (event.target.value.includes("o") || event.target.value.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
      userRef.current.focus();
      userRef.current.style.borderColor = "red";
      userRef.current.style.outline = "none";
    } else {
      userRef.current.focus();
      userRef.current.style.borderColor = "black";
      userRef.current.style.outline = "none";
    }
  };

  const signInHandler = () => {
    if (
      userName.length <= 0 ||
      userName.includes("O") ||
      userName.includes("o")
    ) {
      alert("¡Usuario inválido para registrarse!");
    } else {
      alert(`¡Usuario registrado correctamente! ${userName}`);
    }
  };
  return (
    <div>
      <label>Ingrese su username</label>
      <br />
      <input onChange={userNameHandler} type="text" ref={userRef} />
      <br />
      <button onClick={signInHandler}>Registrarse</button>
      <p>{userName}</p>
    </div>
  );
};

export default Login;
