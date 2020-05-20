import Vue from 'vue';
new Vue({
   el: ".form-connect",
   data: {
      username: '',
      email: '',
      comment: '',
      nameValid: true,
      emailValid: true,
      commentValid: true,
      currentMassegeName: '',
      currentMassegeEmail: '',
      currentMassegeComment: '',
      errorShortName: 'Слишком короткое имя',
      errorShortEmail: 'Слишком короткий email',
      errorEmailError: 'Некорректный email',
      errorShortComment: 'Пустое сообщение',
      resultMassege: '',
      overlayHidden: true
   },
   methods: {
      validateName() {
         this.username = this.$el.querySelector('.form-connect__input_username').value;
         
         if(this.username.length <= 1) {
            this.nameValid = false;
            this.currentMassegeName = this.errorShortName
         } else {
            this.nameValid = true;
            this.currentMassegeName = '';
         }
         return this.nameValid
      },
      validateEmail() {
         this.email = this.$el.querySelector('.form-connect__input_email').value;
         let regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
         if(this.email.length < 5) {
            this.emailValid = false;
            this.currentMassegeEmail = this.errorShortEmail
         } else if (!regex.test(this.email)) {
            this.emailValid = false;
            this.currentMassegeEmail = this.errorEmailError
         } else {
            this.emailValid = true;
            this.currentMassegeEmail = '';
         }
         return this.emailValid
      },
      validateComment() {
         this.comment = this.$el.querySelector('.form-connect__input_comment').value;
         let inputComment = this.$el.querySelector('.form-connect__input_comment');

         if(this.comment.length < 5) {
            this.commentValid = false;
            this.currentMassegeComment = this.errorShortComment
         } else {
            this.commentValid = true;
            this.currentMassegeComment = '';
         }
         inputComment.onblur = function() {
            this.currentMassegeComment = '';
         }

         return this.commentValid
      },
      submitForm() {
         let submitForm = this.validateName();
         let emailValid = this.validateEmail();
         let commentValid = this.validateComment();

         if (submitForm && emailValid && commentValid) {
            let userData = {
               username: this.username,
               email: this.email,
               comment: this.comment
            }
            fetch('../data/feedback.json', {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(userData)
            }).then ((response) => {
               console.log(response);
               this.resultMassege = 'Сообщение отправлено';
               this.overlayHidden = false;
            })
         }
      },
   }
})