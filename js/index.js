(function () {
  document.getElementById('btn-add').addEventListener('click', () => {
    const form = new FormData(document.getElementById('form'))
    console.log(form.get('calories'));
  })
}())