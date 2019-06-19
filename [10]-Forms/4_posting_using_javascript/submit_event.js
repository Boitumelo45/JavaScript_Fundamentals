import $ from 'jquery'

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

  //posting
  let posting = {
      user :  user.value,
      avatarFile: avatarFile.value
  }

  let promise = $.post("https://5d0a7d1dc5896f0014e86cc2.mockapi.io/v0/station_data", posting);
  promise.then(
      data => console.log("sucess: ", data),
      error => console.log("error: ", error)
  );


  console.log(user.value, avatarFile.value);
  //prevent the browser from submitting the form
  event.preventDefault() //somepath does not exist (index.html)
})
