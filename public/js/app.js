async function multiplicar(event) {
  event.preventDefault();

  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;

  const response = await axios({

    method: "post",

    url: "/multiplicar",

    data: { num1, num2, },

  });

  document.querySelector("#resultado").textContent = `El resultado es: ${response.data}`;
}
