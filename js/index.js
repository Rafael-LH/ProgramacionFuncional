(function () {
  const description = document.getElementById('description');
  const calories = document.getElementById('calories');
  const carbs = document.getElementById('carbs');
  const protein = document.getElementById('protein');
  const containerInputs = [description, calories, carbs, protein];
  let list = []
  const table = document.getElementById('table')

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
      console.log(list);
    } else {
      addErrorsInput()
    }
  }
  document.getElementById('btn-add').addEventListener('click', formCalories)

  const printTableList = () => {
    table.innerHTML = `
          <tr>
            <th>Description</th>
            <th>Calories</th>
            <th>Carbs</th>
            <th>Protein</th>
          </tr>
        `
    if (list.length >= 1) {
      list.forEach(item => {
        table.innerHTML += `
        <tr>
          <td>${item.description}</td>
          <td>${item.calories}</td>
          <td>${item.carbs}</td>
          <td>${item.protein}</td>
        </tr>
        `
      })
    }
  }

  const removeStyleError = (e) => errorClass(e.target)
  containerInputs.forEach(item => {
    item.addEventListener('keyup', removeStyleError)
  });

}())