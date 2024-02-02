"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const operar = (operacion) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    switch (operacion) {
      case "suma":
        setResultado(`Resultado de la suma: ${num1 + num2}`);
        break;
      case "resta":
        setResultado(`Resultado de la resta: ${num1 - num2}`);
        break;
      case "multiplicacion":
        setResultado(`Resultado de la multiplicación: ${num1 * num2}`);
        break;
      case "division":
        if (num2 !== 0) {
          setResultado(`Resultado de la división: ${num1 / num2}`);
        } else {
          setResultado("Error: División por cero");
        }
        break;
      case "potenciacion":
        setResultado(`Resultado de la potenciación: ${Math.pow(num1, num2)}`);
        break;
      case "raiz":
        if (num1 >= 0) {
          setResultado(
            `Resultado de la raíz cuadrada de ${num1}: ${Math.sqrt(num1)}`
          );
        } else {
          setResultado(
            "Error: No se puede calcular la raíz cuadrada de un número negativo"
          );
        }
        break;
      case "borrar":
        setNumero1("");
        setNumero2("");
        setResultado(null);
        break;
      default:
        setResultado(null);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>
        <div>
          <button className={styles.button} onClick={() => operar("suma")}>
            Sumar
          </button>
          <button className={styles.button} onClick={() => operar("resta")}>
            Restar
          </button>
          <button
            className={styles.button}
            onClick={() => operar("multiplicacion")}
          >
            Multiplicar
          </button>
          <button className={styles.button} onClick={() => operar("division")}>
            Dividir
          </button>
          <button
            className={styles.button}
            onClick={() => operar("potenciacion")}
          >
            Potenciación
          </button>
          <button className={styles.button} onClick={() => operar("raiz")}>
            Raíz Cuadrada
          </button>
          <button className={styles.button} onClick={() => operar("borrar")}>
            Borrar
          </button>
        </div>
        {resultado && (
          <div className={styles.resultado}>{resultado}</div>
        )}
      </div>
    </main>
  );
}
