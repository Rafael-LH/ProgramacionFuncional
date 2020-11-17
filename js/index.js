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
      console.log(list);
    } else {
      addErrorsInput()
    }
  }
  document.getElementById('btn-add').addEventListener('click', formCalories)

  const removeStyleError = (e) => errorClass(e.target)
  containerInputs.forEach(item => {
    item.addEventListener('keyup', removeStyleError)
  });

}())