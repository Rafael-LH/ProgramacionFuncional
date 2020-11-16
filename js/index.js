(function () {
  const description = document.getElementById('description');
  const calories = document.getElementById('calories');
  const carbs = document.getElementById('carbs');
  const protein = document.getElementById('protein');
  const containerInputs = [description, calories, carbs, protein];

  const errorClass = (element) => element.value ? element.classList.remove('input-error') : element.classList.add('input-error')

  const addErrorsInput = () => {
    containerInputs.forEach(item => errorClass(item))
  }
  const formCalories = () => {

    if (description.value && calories.value && carbs.value && protein.value) {
      const form = new FormData(document.getElementById('form'))
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