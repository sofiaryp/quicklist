const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault()
}

function addProduct(){
  const input = document.getElementById("input-product");
  const inputValue = input.value.trim();

  if(inputValue !== ""){
    const list = document.getElementById("list-products");
    const newInput = document.createElement("li");

    newInput.classList.add("terms-wrapper", "checkbox-wrapper");

    newInput.innerHTML = `
      <div class="checkbox-image"></div>
      <input type="checkbox" name="terms">
      <label>${inputValue}</label>
      <img src="assets/icons/trash.svg" alt="remover" class="trash">
    `;

    list.appendChild(newInput);

    input.value = "";
  }
}

function enableRemoveProduct(){
  const list = document.getElementById("list-products");
  const removeAlert = document.getElementById("remove-alert");
  const closeAlert = removeAlert.querySelector(".close-alert");

  // remover item ao clicar na lixeira
  list.addEventListener("click", (event) => {
    if(event.target && event.target.matches("img.trash")){
      const li = event.target.closest("li");
      li.remove();

      // exibe alerta
      removeAlert.style.display = "flex";
    }
  });

  // fecha alerta ao clicar no X
  closeAlert.addEventListener("click", () => {
    removeAlert.style.display = "none";
  });
}

// inicializa a função
enableRemoveProduct();


