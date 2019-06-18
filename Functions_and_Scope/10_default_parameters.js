
//notice the use of `...` instead of " .... "
let username = (fname = 'John', lname = 'Doe', gitAccount = 'Boitumelo45') =>{
  console.log(`First name: ${fname}\nLast name: ${lname}\nGitHub Account: ${gitAccount}`)
}

username() //default parameters
username('Boitumelo', 'Phetla', '@Boitumelo45')
