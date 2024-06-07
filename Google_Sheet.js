const scriptURL = 'https://script.google.com/macros/s/AKfycbyrH9G8uSHweXUTmFUAF4H36lQutLa5DTNBwQ4m8R79o2DTcSSqdpH4U3LaVbltqkNz/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})