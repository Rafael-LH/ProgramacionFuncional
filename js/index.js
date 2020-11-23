(function () {
  const description = document.getElementById('description');
  const calories = document.getElementById('calories');
  const carbs = document.getElementById('carbs');
  const protein = document.getElementById('protein');
  const containerInputs = [description, calories, carbs, protein];
  let list = []

  const errorClass = (element) => element.value ? element.classList.remove('input-error') : element.classList.add('input-error')
  const addErrorsInput = () => containerInputs.forEach(item => errorClass(item))
  const cleanInputsSubmit = () => containerInputs.forEach(item => item.value = '')

  const addProduct = () => {
    const newProducts = {
      description: description.value,
      calories: parseInt(calories.value),
      carbs: parseInt(carbs.value),
      protein: parseInt(protein.value)
    }
    list.push(newProducts)
  }

  const formCalories = () => {
    if (description.value && calories.value && carbs.value && protein.value) {
      addProduct()
      cleanInputsSubmit()
      printTableList()
      caloriesCounter()
    } else {
      addErrorsInput()
    }
  }
  document.getElementById('btn-add').addEventListener('click', formCalories)
  const caloriesCounter = (position = '') => {
    const total = document.getElementById('total')
    if (typeof position === 'number') list.splice(position, 1)
    const values = list.reduce((acc, cvalue, cindex) => {
      if (cindex !== position) {
        return {
          calories: acc.calories += cvalue.calories,
          carbs: acc.carbs += cvalue.carbs,
          protein: acc.protein += cvalue.protein,
        }
      }
    }, { calories: 0, carbs: 0, protein: 0 }) || { calories: 0, carbs: 0, protein: 0 }
    Object.values(values).forEach((item, index) => total.children[index + 1].textContent = item)
  }
  const printTableList = () => {
    const tbody = document.getElementById('tbody')
    tbody.insertAdjacentHTML(
      "beforebegin",
      `<tr class="tr--modify">
        <td>${list[list.length - 1].description}</td>
        <td>${list[list.length - 1].calories}</td>
        <td>${list[list.length - 1].carbs}</td>
        <td>${list[list.length - 1].protein}</td>
        <td><button class="btn-delete">Eliminar</button></td>
      </tr>`)
    const buttonsDelete = document.getElementsByClassName('btn-delete')
    Object.values(buttonsDelete).forEach(element => {
      element.addEventListener('click', deleteProduct)
    });
  }
  const deleteProduct = (e) => {
    e.target.parentElement.parentElement.remove()
    caloriesCounter(Number(e.target.dataset.id))
  }
  const removeStyleError = (e) => errorClass(e.target)
  containerInputs.forEach(item => {
    item.addEventListener('keyup', removeStyleError)
  });

}())