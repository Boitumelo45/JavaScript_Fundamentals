

let form = document.getElementById('user-form')

form.addEventListener('submit', event => {

  let user = form.elements['user']
  let avatarFile = form.elements['avatar-file']
  let userError = document.getElementById('user-error')

  //user validation
  if(user.value.length < 4){
      userError.textContent = "Invalid Entry"
      userError.style.color = "red"
      userError.style.borderColor = "red"
      user.focus()
  }

  console.log(user.value, avatarFile.value);

  //prevent the browser from submitting the form
  event.preventDefault() //somepath does not exist (index.html)
})
