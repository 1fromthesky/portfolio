const form = document.forms.formConnect;
const inputUsernameElement = formConnect.username;
const inputEmailElement = formConnect.email;
const inputCommentElement = formConnect.comment;
const submitFormBtn = document.querySelector('.form-connect__btn');



submitFormBtn.addEventListener('click', event => {
   event.preventDefault()
   
   console.log(formConnect.elements.username.value);
   console.log(formConnect.elements.email.value);
   console.log(formConnect.elements.comment.value);
   
   // const data = new FormData() 
   // data.append('User', formConnect.elements.username.value);
   // data.append('User', formConnect.elements.email.value);
   // data.append('User', formConnect.elements.comment.value);
   // console.log(data)

   // inputUsernameElement.value = '';

})