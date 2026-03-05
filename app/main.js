function convertir(valor, unidadOrigen, unidadDestino) {
  try {
    if (valor === null || valor === undefined || isNaN(valor)) {
      throw new Error("El valor debe ser un número válido.");
    }

    valor = Number(valor);
    unidadOrigen = unidadOrigen.toLowerCase();
    unidadDestino = unidadDestino.toLowerCase();

    const temperatura = ["c", "f", "k"];
    const longitud = ["m", "cm", "km"];
    const peso = ["kg", "g", "lb"];

    let tipo = null;

    if (temperatura.includes(unidadOrigen) && temperatura.includes(unidadDestino)) {
      tipo = "temperatura";
    } else if (longitud.includes(unidadOrigen) && longitud.includes(unidadDestino)) {
      tipo = "longitud";
    } else if (peso.includes(unidadOrigen) && peso.includes(unidadDestino)) {
      tipo = "peso";
    } else {
      throw new Error(
        "Las unidades no pertenecen a la misma categoría o no son válidas."
      );
    }

    if (unidadOrigen === unidadDestino) {
      return `${valor} ${unidadOrigen} = ${valor} ${unidadDestino}`;
    }

    let resultado;

    if (tipo === "temperatura") {
      if (unidadOrigen === "c" && unidadDestino === "f") {
        resultado = (valor * 9 / 5) + 32;
      } else if (unidadOrigen === "c" && unidadDestino === "k") {
        resultado = valor + 273.15;
      } else if (unidadOrigen === "f" && unidadDestino === "c") {
        resultado = (valor - 32) * 5 / 9;
      } else if (unidadOrigen === "f" && unidadDestino === "k") {
        resultado = (valor - 32) * 5 / 9 + 273.15;
      } else if (unidadOrigen === "k" && unidadDestino === "c") {
        resultado = valor - 273.15;
      } else if (unidadOrigen === "k" && unidadDestino === "f") {
        resultado = (valor - 273.15) * 9 / 5 + 32;
      }
    }

    if (tipo === "longitud") {
      if (unidadOrigen === "m" && unidadDestino === "cm") {
        resultado = valor * 100;
      } else if (unidadOrigen === "m" && unidadDestino === "km") {
        resultado = valor / 1000;
      } else if (unidadOrigen === "cm" && unidadDestino === "m") {
        resultado = valor / 100;
      } else if (unidadOrigen === "cm" && unidadDestino === "km") {
        resultado = valor / 100000;
      } else if (unidadOrigen === "km" && unidadDestino === "m") {
        resultado = valor * 1000;
      } else if (unidadOrigen === "km" && unidadDestino === "cm") {
        resultado = valor * 100000;
      }
    }

    if (tipo === "peso") {
      if (unidadOrigen === "kg" && unidadDestino === "g") {
        resultado = valor * 1000;
      } else if (unidadOrigen === "kg" && unidadDestino === "lb") {
        resultado = valor * 2.20462;
      } else if (unidadOrigen === "g" && unidadDestino === "kg") {
        resultado = valor / 1000;
      } else if (unidadOrigen === "g" && unidadDestino === "lb") {
        resultado = valor / 453.592;
      } else if (unidadOrigen === "lb" && unidadDestino === "kg") {
        resultado = valor / 2.20462;
      } else if (unidadOrigen === "lb" && unidadDestino === "g") {
        resultado = valor * 453.592;
      }
    }

    if (resultado === undefined) {
      throw new Error("Conversión no soportada.");
    }

    return `${valor} ${unidadOrigen} = ${resultado.toFixed(2)} ${unidadDestino}`;
  } catch (error) {
    return ` Error: ${error.message}`;
  }
}


console.log(convertir(25, "C", "F"));
console.log(convertir(5, "km", "m"));
console.log(convertir(10, "kg", "lb"));
console.log(convertir("abc", "kg", "g")); 
console.log(convertir(100, "kg", "m"));