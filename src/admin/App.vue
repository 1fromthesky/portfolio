<template lang="pug">
	.wrapper
		section.login
			.login__container
				.login__content
					.login__title Авторизация
					form.login__form(name="login-form")
						label.login__label
							input(type="text" name="login-login" required="").login__input
							.login__form-title Логин
							.login__icon-wrap
								.login__icon
						label.login__label
							input(type="password" name="login-password" required="").login__input
							.login__form-title Пароль
							.login__icon-wrap
								.login__icon.login__icon_key
						.login__btn-wrap
							button(type="button" name="login-btn-login").login__btn-login Отправить
		.modal_sent.modal
			.modal__text Сообщение отправлено
			button(type="button").modal__icon
				.modal__cross
		.modal_overloaded.modal
			.modal__text Сервер перегнужен
			button(type="button").modal__icon
				.modal__cross
		.modal_error.modal
			.modal__text Сообщение не отправлено
			button(type="button").modal__icon
				.modal__cross
		header.header
			.container-admin
				.header__content
					.header__avatar
						.avatar
							img(src="../images/content/user.jpg").avatar__img
					.header__container 
						.header__user User Name
						.header__user-class Панель администратора
						button.header__btn Выйти
		nav.nav
			.container-admin
				ul.nav__list
					li.nav__item(v-for="i in ['Обо мне', 'Работы', 'Отзывы']")
						a.nav__link(href='#' v-text="i")
		section.section.about
			.container-admin.container-admin_column
				.section__title-wrap
					h2.section-title Блок «Обо мне»
					button(type="button" name="group-add-btn-new").about__btn Добавить группу
						.about__btn-wrap
							.btn-plus 
				.about__content
					.about__content-list
						.group.group_new
							.group__title
								input(placeholder="Название новой группы" :value="''" name="group-name").group__input.group__name-group
								.group__btns-wrap
									button(type="button" name="group-edit-btn").btn-true.btn-true_active
									button(type="button" name="group-delete-btn").btn-false.btn-false_active
							.group__skills
								.skill.skill_new
									input(:disabled="false" :value="''" name="prof-name").skill__prof.skill__input
									input(:disabled="false" :value="''" name="percent" type="number" min="0" max="100").skill__perc.skill__input
									.group__btns-wrap
										button(type="button" name="group-edit-btn").btn-true
										button(type="button" name="group-delete-btn").btn-false
							.group__skill-add
								input(placeholder="Новый навык" name="add-prof").group__skill-name.group__input
								input(placeholder="100 %" name="add-percent" type="number" min="0" max="100").group__skill-percent.group__input
								button(type="button" name="group-add" disabled="true").group__btn
									.group__btn-wrap
										.btn-plus
						.group(v-for="group in ['Frontend','Backend']")
							.group__title
								input(placeholder="Название новой группы" :value="group" name="group-name").group__input.group__name-group
								.group__btns-wrap
									button(type="button" name="group-edit-btn").btn-true
									button(type="button" name="group-delete-btn").btn-false
							.group__skills
								.skill(v-for="skill in [['Git', '30'],['JavaScript', '20'],['HTML5', '60']]")
									input(:disabled="false" :value="skill[0]" name="prof-name").skill__prof.skill__input
									input(:disabled="false" :value="skill[1]" name="percent" type="number" min="0" max="100" placeholder="%").skill__perc.skill__input
									.group__btns-wrap
										button(type="button" name="group-edit-btn").btn-true
										button(type="button" name="group-delete-btn").btn-false
							.group__skill-add
								input(placeholder="Новый навык" name="add-prof").group__skill-name.group__input
								input(placeholder="100 %" name="add-percent" type="number" min="0" max="100").group__skill-percent.group__input
								button(type="button" name="group-add").group__btn
									.group__btn-wrap
										.btn-plus
		section.section.projects
			.container-admin.container-admin_column
				.section__title-wrap
					h2.section-title Блок «Работы»
				.projects__content
					.projects__title
						h3.section-title_middle Редактирование работы
					form(name="project-form").projects__form
						.load-window
							input(type="file" name="project-image" multiple).load-window__input
							label.load-window__label
							.load-window__content
								.load-window__text Перетащите или загрузите для загрузки изображения
								button(type="button" name="project-image-btn").load-window__btn.btn-toggle Загрузить
						.load-form
							label.load-form__label
								.load-form__title Название
								input(type="text" name="project-name").load-form__input
							label.load-form__label
								.load-form__title Ссылка
								input(type="text" name="project-link").load-form__input
							label.load-form__label
								.load-form__title Описание
								textarea(name="project-desc").load-form__input.load-form__textarea
							label.load-form__label
								.load-form__title Добавление тега
								input(type="text" name="project-tag").load-form__input
								ul.load-form__tags
									li.load-form__tag(v-for="tag in ['HTML', 'CSS', 'JavaScript']")
										p {{tag}}
										button.load-form__tag-btn.btn-false.btn-false_active
							.load-form__btn-wrap
								button(type="reset").btn-toggle-cancel Отмена
								button(type="button" name="project-add").load-form__btn.btn-toggle Сохранить
				.projects__work
					.projects__work-list
						button.create-btn(type="button" name="project-add")
							.create-btn__circle
							.create-btn__text Добавить работу
						.work(v-for="work in ['1', '2','3']")
							.work__image
								img(src="../images/content/pro1.jpg").work__pic
								ul.work__tags
									li.work__tag(v-for="tag in ['HTML', 'CSS', 'JavaScript']")
										p {{tag}}
							.work__container
								.work__content
									h4.work__title Сайт школы образования
									.work__text
										p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
									a.work__link http://loftschool.ru
								.work__btn-wrap
									button.work__btn Править
										.btn-true
									button.work__btn Удалить
										.btn-false.btn-false_active
		section.section.reviews
			.container-admin.container-admin_column
				.section__title-wrap
					h2.section-title Блок «Отзывы»
				.reviews__content
					.reviews__title
						h3.section-title_middle Редактирование работы
					form(name="author-form").reviews__form
						.user-photo
							.user-photo__wrap
								.user-photo__photo
									img(src="../images/content/user.jpg").user-photo__img
							button.user-photo__btn-add Добавить фото
						.recall
							.recall__row
								label.recall__label
									.recall__title Имя автора
									input(type="text" name="author-name").recall__input
								label.recall__label
									.recall__title Титул автора
									input(type="text" name="author-rank").recall__input
							.recall__row
								label.recall__label
									.recall__title Отзыв
									textarea(name="author-desc").recall__input.recall__textarea
							.recall__row
								.recall__btn-container
									button(type="reset").btn-toggle-cancel Отмена
									button(type="button" name="author-add").load-form__btn.btn-toggle Сохранить
				.reviews__comments
					.reviews__comments-list
						button.create-btn(type="button" name="comment-add")
							.create-btn__circle
							.create-btn__text Добавить отзыв
						.comment(v-for="work in ['1', '2','3']")
							.comment__head
								.comment__avatar
									.avatar
										img(src="../images/content/user.jpg").avatar__img
								.comment__user-container 
									.comment__user User Name
									.comment__user-rank frontend
							.comment__content
								p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
							.comment__btn-wrap
									button.comment__btn Править
										.btn-true
									button.comment__btn Удалить
										.btn-false.btn-false_active
								
</template>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

body {
	background-color: #f8f9fe;
}
.container-admin {
	width: 100%;
	max-width: 1140Px;
	height: 100%;
	margin: 0 auto;
	padding: 0 20px;
	position: relative;
	display: flex;

	&_column {
		flex-direction: column;
	}

	@include phones {
		padding: 0;
	}
}

.section-title {
	font-size: 21px;
	font-weight: 700;

	&_middle{
		font-size: 18px;
		font-weight: 600;
	}
}

.section__title-wrap {
	display: flex;
	padding: 30Px 0;
	@include phones {
		flex-direction: column;
		align-items: start;
		margin-left: 20px;
	} 
}
/* -----------------------------login----------------------------------- */

.login {
	/* z-index: 1000; */
	/* position: fixed; */
	overflow-y: hidden;
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: url('../images/bg/hero.jpg') center center / cover no-repeat;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		background-color: rgba($text-color, .7)
	}
	&__container {
		width: 560px;
		height: 515px;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		@include tablets {
			width: 528px;
			height: 528px;
		}
		@include phones {
			width: 100%;
			height: 100vh;
			padding: 30px;
		}
	}
	&__content {
		width: 430px;
		height: 415px;
		@include phones {
			width: 100%;
		}
	}
	&__title {
		font-size: 36px;
		font-weight: 700;
		text-align: center;
	}
	&__form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	&__label {
		margin-top: 30px;
		width: 100%;
      position: relative;
	}
	&__form-title {
		position: absolute;
      top: 0;
      padding: 17px 0px 21px;
      font-weight: 600;
      color: rgba($text-color, .5);
      margin-left: 45px;
      font-size: 18px;
      transition: .3s;
	}
	&__input {
		position: relative;
      display: block;
      border: none;
      outline: none;
      width: 100%;
      border-bottom: 2px solid rgba($text-color, .7);
      padding: 17px 45px 21px;
      background: transparent;
      color: inherit;
      font-weight: 700;
      line-height: inherit;
      font-size: 18px;

      &:focus ~ .login__form-title, 
      &:valid ~ .login__form-title {
         top: -40px;
         font-size: 16px;
         color: $main;
      }
      &:focus:invalid ~ .login__form-title {
         top: -40px;
         color: $text-color
      }
      &:focus {
         border-bottom-color: $main;
      }
      &:focus ~ .login__icon-wrap .login__icon, 
      &:valid ~ .login__icon-wrap .login__icon {
   	   background: svg-load('user.svg', fill=$main, width=100%, height=100%) center center no-repeat;
      }
      &:focus ~ .login__icon-wrap .login__icon_key, 
      &:valid ~ .login__icon-wrap .login__icon_key {
   	   background: svg-load('key.svg', fill=$main, width=100%, height=100%) center center no-repeat;
      }
      &:focus:invalid ~ .login__icon-wrap .login__icon {
         background: svg-load('user.svg', fill=$text-color, width=100%, height=100%) center center no-repeat;
      }
      &:focus:invalid ~ .login__icon-wrap .login__icon_key {
         background: svg-load('key.svg', fill=$text-color, width=100%, height=100%) center center no-repeat;
      }
	}
	&__icon-wrap {
		position: absolute;
      bottom: 100%;
		.login__icon {
			background: svg-load('user.svg', fill=rgba($text-color, .5), width=100%, height=100%) center center no-repeat;
      	display: block;
      	position: absolute;
      	top: 50%;
      	transform: translateY(50%);
      	width: 30px;
      	height: 30px;
      	transition: .3s;
			&_key {
				background: svg-load('key.svg', fill=rgba($text-color, .5), width=100%, height=100%) center center no-repeat;
			}
		}
	}
	&__btn-wrap {
		text-align: center;
		margin-top: 50px;
	}
	&__btn-login {
		color: #fff;
   	font-size: 18px;
   	font-weight: 600;
   	text-transform: uppercase;
   	padding: 30px 30px;
   	width: 350px;
   	border-bottom-right-radius: 40px;
   	border-bottom-left-radius: 5px;
   	border-top-left-radius: 40px;
   	border-top-right-radius: 5px;
   	background: linear-gradient( 50deg, rgb(173,0,237) 0%, rgb(129,0,240) 38%, rgb(85,0,242) 100%);
   	background: -moz-linear-gradient( 50deg, rgb(173,0,237) 0%, rgb(129,0,240) 38%, rgb(85,0,242) 100%);   
   	background: -webkit-linear-gradient( 50deg, rgb(173,0,237) 0%, rgb(129,0,240) 38%, rgb(85,0,242) 100%);
   	background: -ms-linear-gradient( 50deg, rgb(173,0,237) 0%, rgb(129,0,240) 38%, rgb(85,0,242) 100%);
		@include phones {
			padding: 20px 20px;
			width: 250px;
		}
		&:focus {
			opacity: .8;
		}
		&:hover {
			background: linear-gradient( 70deg, rgb(187,0,255) 0%, rgb(138,0,255) 38%, rgb(89,0,255) 100%);
			background: -moz-linear-gradient( 70deg, rgb(187,0,255) 0%, rgb(138,0,255) 38%, rgb(89,0,255) 100%);      
			background: -webkit-linear-gradient( 70deg, rgb(187,0,255) 0%, rgb(138,0,255) 38%, rgb(89,0,255) 100%);      
			background: -ms-linear-gradient( 70deg, rgb(187,0,255) 0%, rgb(138,0,255) 38%, rgb(89,0,255) 100%);      
		}
	}
}
/* -------------------------------modal------------------------------------ */

.modal {
	z-index: 1200;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px;
	bottom: 0;
	width: 400px;
	
	&_sent {
		background-color: #4bb133;
		left: 100px;
	}
	&_overloaded {
		background-color: #b18333;
		left: 50%;
		transform: translateX(-50%);
	}
	&_error {
		background-color: #b13333;
		right: 100px;
	}
	&__text {
		color: #fff;
		font-size: 18px;
		font-weight: 600;
	} 
	&__icon {
		position: relative;
	}
	&__cross {
		width: 22px;
		height: 22px;
		display: block;
		background: svg-load('cross.svg', fill=#fff, width=100%, height=100%) center center no-repeat;
	}
}
/* -------------------------------header---------------------------------- */

.header {
	color: #fff;
	background: linear-gradient( 90deg, rgb(62,62,89) 0%, rgb(69,69,115) 100%);
	background: -moz-linear-gradient( 90deg, rgb(62,62,89) 0%, rgb(69,69,115) 100%);
	background: -webkit-linear-gradient( 90deg, rgb(62,62,89) 0%, rgb(69,69,115) 100%);
	background: -ms-linear-gradient( 90deg, rgb(62,62,89) 0%, rgb(69,69,115) 100%);
	width: 100%;
	height: 80Px;
	&__content {
		width: 100%;
		display: flex;
		align-items: center;
	}

	&__avatar {
		min-width: 50Px;
		margin-right: 20Px;
		@include phones {
			margin-left: 15Px;
		}
	}
	&__container {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@include phones {
			flex-direction: column;
			flex: 0;
			align-items: start;
		}
	}
	&__user {
		line-height: 1.42;
		font-size: 18Px;
		margin-right: 20px;
		white-space: nowrap;
	}
	&__user-class {
		font-size: 14Px;
		color: rgba(255, 255, 255, 0.502);
		margin-right: 20px;
		text-align: left;
		flex: 1;
		@include phones {
			display: none;
		}
	}
	&__btn {
		font-size: 16Px;
		color: rgba(255, 255, 255, 0.702);
		text-decoration: underline;
		line-height: 1.5;
		&:hover {
			color: #fff;
		}
	}
}

.avatar {
	padding-bottom: 100%;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	&__img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
	}
}

/* ============================= nav ========================== */

.nav {
	background-color: #fff;
	font-weight: 600;
	font-size: 16Px;
	height: auto;

	&__list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
	}
	&__item {
		padding: 25Px 15Px;
		border-bottom: 3Px solid transparent;

		&:hover {
			color: $main;
			border-bottom: 3Px solid $main;
		}
	}
	&__link {
		white-space: nowrap;
	}
}

/* ================ blue button plus ============ */

.btn-plus {
	/* display: flex; */
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
	&:hover {
		background: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
	}
	
	&::before,
	&::after {
		content: '';
		display: block;
		position: absolute;
		width: 40%;
		height: 7%;
		background: #fff;
	}
	
	&::after {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	&::before {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(90deg);
	}
}

/* ==================== */

.about {
		
	&__btn {
		display: flex;
		flex-flow: row-reverse;
		margin-left: 60px;
		color: $links-color;
		font-weight: 700;
		@include phones {
			font-size: 14Px;
			margin: 20px 0 0 0;
		}
		&:hover .btn-plus {
			background: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		}
		&-wrap {
			width: 20px;
			height: 20px;
			margin-right: 15px;
		}
	}

	&__content {
		width: 100%;
		&-list {
			margin-left: -30px;
			display: flex;
			flex-wrap: wrap;
		}
	}
}

/* =============================== group ================================== */

.group {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20Px;
	width: calc(100% / 2 - 30px);
	min-width: 300Px;
	min-height: 390Px;
	background-color: #fff;
	box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
	margin-left: 30px;
	margin-bottom: 30px;
	@include tablets {
		max-width: 530Px;
		width: 100%;
	}
	@include phones {
		max-width: 100%;
		padding: 20Px 0;
	}

	&__title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid rgba($text-color, .3);
		padding: 0 10px 20px;
	}

	&__btns-wrap {
		margin-left: 10px;
		min-width: 50px;
		justify-content: space-between;
		display: flex;
		align-items: center;
	}
	
	&__input {
		position: relative;
		display: block;
		border: none;
		outline: none;
		background: transparent;
		border-bottom: 1px solid transparent;
		color: inherit;
		font-weight: 600;
		line-height: inherit;
		font-size: 18px;

		&::placeholder {
			font-size: 16px;
			color: rgba($text-color, .3);
		}
		&:focus::placeholder {
			color: transparent;
		}

		&:focus {
			border-bottom: 1px solid $text-color;
		}
	}

	&__name-group { 
		width: 62%;
	}
	&__skill-name {
		width: 40%;
		border-bottom: 1px solid $text-color;
	}
	&__skill-percent {
		min-width: 17%;
		margin-left: 10px;
		text-align: center;
		border-bottom: 1px solid $text-color;
	}

	&__skills {
		flex: 1;
		height: 100%;
		padding: 10px;
	}

	&__skill-add {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 10px;
	}
	&__btn {
		margin-left: 20px;
		&:disabled .btn-plus {
		background: rgba($text-color, .5);
	}
		&-wrap {
			width: 40px;
			height: 40px;
		}
	}
}



/* ----------- кнопки-------------------------------- */


.btn-true {
	background: svg-load('pencil.svg', fill=$text-color, width=100%, height=100%) center center no-repeat;
	display: block;
	width: 15px;
	height: 15px;
	opacity: .5;
	&:hover {
		opacity: 1;
	}
	&_active {
		background: svg-load('tick.svg', fill=#00d70a, width=100%, height=100%) center center no-repeat;
		opacity: .8;
	}
}
.btn-false {
	background: svg-load('trash.svg', fill=$text-color, width=100%, height=100%) center center no-repeat;
	display: block;
	position: relative;
	width: 14px;
	height: 14px;
	opacity: .5;
	&:hover {
		opacity: 1;
	}
	&_active {
		background: svg-load('cross.svg', fill=#bf2929, width=100%, height=100%) center center no-repeat;
		opacity: .8;
	}
}
/* ------------------------------------------------------------------------------------- */
.skill {
	display: flex;
	justify-content: space-between;
	/* width: 100%; */
	margin-top: 10px;
	&:first-child {
		margin-top: 0;
	}
	&__prof {
		width: 60%;
	}
	&__perc {
		width: 75px;
		text-align: right;
	}
	&__input {
		display: block;
		border: none;
		outline: none;
		background: transparent;
		color: inherit;
		font-weight: 600;
		line-height: inherit;
		border-bottom: 1px solid transparent;
		font-size: 16px;
		&:focus {
			border-bottom: 1px solid $text-color;
		}
		&:hover {
			background-color: rgba($text-color, .07);
		}
	}
}

/* =========================== projects =================================== */
.projects__content {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20Px;
	background-color: #fff;
	box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
	margin-bottom: 30px;
	@include phones {
		/* padding: 0; */
	}
}

.projects__title {
	align-items: center;
	border-bottom: 1px solid rgba($text-color, .3);
	padding: 0 10Px 20Px;
	font-size: 16px;
}

.projects__form {
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
	padding: 10px;
	@include tablets {
		flex-direction: column;
		align-items: center;
	}
}

.projects__work {
	width: 100%;
	&-list {
		margin-left: -30px;
		display: flex;
		flex-wrap: wrap;
	}
}

/* ----------------------окно загрузки изображения -------------------------------- */
.load-window {
	max-width: 490Px;
	width: 100%;
	height: 280px;
	background-color: #dee4ed;
	border: 1px dashed $text-color;
	position: relative;
	margin-right: 30px;
	@include tablets {
		margin: 0;
	}
	@include phones {
		margin: 0;
	}

	&__content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	&__btn {
		margin-top: 20px;
		padding: 15Px 40Px;
	}

	&__label {
		cursor: pointer;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
	&__text {
		color: rgba($text-color, .5);
		min-width: 200Px;
	}
	&__input {
		position: absolute;
		width: 0.1px;
		opacity: 0;
		z-index: -100;
		&:focus + .load-window__label {

		}
	}
}

.btn-toggle {
	background: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
	border-radius: 25px;
	color: #fff;
	font-weight: 700;
	border: 1px solid transparent;
	text-transform: uppercase;

	&:hover {
		background: linear-gradient( 180deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
	}
}

.btn-toggle-cancel {
		background: #fff;
		font-size: 16px;
		font-weight: 600;
		color: $links-color;
		border: 1px solid transparent;
		padding: 7px;
		margin-right: 10%;
		&:hover {
			background: none;
		}
		@include phones {
			margin-right: 5%;
		}
	}
/* -----------------------------------форма---------------------------------------------- */
.load-form {
	display: flex;
	flex-direction: column;
	max-width: 500Px;
	width: 100%;
	@include tablets {
		margin-top: 50px;
	}

	&__label {
		display: block;
		margin-bottom: 30px;
		&:last-of-type {
			margin-bottom: 0;
		}
	}

	&__title {
		line-height: 1;
		font-weight: 700;
		color: rgba($text-color, .5);
		font-size: 16px;
	} 
	&__input {
		position: relative;
		display: block;
		border: none;
		outline: none;
		width: 100%;
		border-bottom: 1px solid $text-color;
		padding: 15px 0 15px;
		background: transparent;
		color: inherit;
		font-weight: 600;
		line-height: inherit;
		font-size: 16px;
		/* margin-top: 30px; */
      &:focus {
         border-bottom-color: $main;
      }
	} 
	&__textarea {
		max-width: 100%;
		min-height: 120px;
		padding: 10px;
		margin-top: 15px;
		border: 1px solid rgba($text-color,.3);
		resize: none;
		overflow: hidden;
		&:focus {
			border: 1px solid $main;
		}
	}

	&__tags {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20px;
		margin-left: -20px;
	}

	&__tag {
		display: flex;
		align-items: center;
		margin-left: 20px;
		padding: 4Px 15Px;
		border-radius: 25Px;
		margin-bottom: 5px;
		background-color: #eee;
		p {
			font-size: 13px;
		}

		&-btn.btn-false_active {
			background: svg-load('cross.svg', fill=rgba($text-color, .5), width=100%, height=100%) center center no-repeat;
		}
		&-btn {
			margin-left: 10px;
		}
	}

	&__btn {
		padding: 15Px 36Px;
		text-transform: uppercase;
		&-wrap {
			margin-top: 20px;
			text-align: right;
		}
	} 
}
/* ---------------------------------------------- work ---------------------------- */

.work {
	max-width: calc(100% / 3 - 30px);
	min-width: 280Px;
	min-height: 560Px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #fff;
	box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
	margin-left: 30px;
	margin-bottom: 30px;
	@include tablets {
		max-width: calc(100% / 2 - 30px);
	}
	@include phones {
		max-width: calc(100% - 30px);
	}

	&__container {
		height: 100%;
		padding: 30Px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@include tablets {
			padding: 20Px;
		}
	}
	&__text {
		margin-top: 20px;
	}
	&__image {
		position: relative;
	}
	&__tags {
		position: absolute;
		bottom: 10px;
		right: 10px;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-left: -20px;
	}
	&__tag {
		display: flex;
		align-items: center;
		margin-left: 10px;
		padding: 3Px 17Px;
		border-radius: 25Px;
		background-color: #eee;
		&:first-child {
			margin-left: 0;
		}
		p {
			font-size: 13px;
		}
	}

	&__title {
		font-size: 18px;
		font-weight: 700;
		line-height: 1;
	}
	&__link {
		color: $links-color;
		font-weight: 700;
		margin-top: 25px;
	}
	&__btn-wrap {
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
	}
	
	&__btn {
		display: flex;
		align-items: center;
		color: rgba($text-color,.7);
		.btn-true,
		.btn-false {
			margin-left: 10px;
		}
		.btn-true {
			background: svg-load('pencil.svg', fill=$links-color, width=100%, height=100%) center center no-repeat;
			opacity: 1;
		}
	}
}

/* --------------------------------review------------------------------- */


.reviews {
	&__content {
		display: flex;
		flex-direction: column;
		padding: 20Px;
		background-color: #fff;
		box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
		margin-bottom: 30px;
	}
	&__title {
		align-items: center;
		border-bottom: 1px solid rgba($text-color, .3);
		padding: 0 10Px 20Px;
		font-size: 16px;
	}
	&__form {
		display: flex;
		margin-top: 40px;
		padding: 10px;
		@include phones {
			flex-direction: column;
			align-items: center;
		}
	}

	&__comments {
		width: 100%;
		&-list {
			margin-left: -30px;
			display: flex;
			flex-wrap: wrap;
		}
	}
}

.user-photo {
	width: 17%;
	min-width: 100Px;
	margin-right: 30px;
	display: flex;
	flex-direction: column;
	@include phones {
		margin-right: 0;
		min-width: 200Px;
	}
	&__wrap {
		width: 100%;
		margin: 0 auto;
	}
	&__photo {
		padding-bottom: 100%;
		border-radius: 50%;
		overflow: hidden;
		position: relative;
	}
   &__img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
   }
	&__btn-add {
		display: block;
		text-align: center;
		margin-top: 20px;
		font-size: 16px;
		font-weight: 600;
		color: $admin-link;
	}
}



.recall {
	width: 60%;
	margin-left: -30px;
	@include desktop {
		width: 70%;
	}
	@include tablets {
		width: 100%;
		margin: 0;
	}

	&__row {
		display: flex;
		margin-bottom: 30px;
		@include phones {
			flex-direction: column;
			margin: 30px 0 0 0;
		}
	}
	&__label {
		display: block;
		width: 100%;
		margin-left: 30px;
		@include phones {
			margin: 30px 0 0 0;
			&:first-child {
				margin: 0;
			}
		}
	}
	&__input {
		display: block;
		border: none;
		outline: none;
		width: 100%;
		border-bottom: 1px solid $text-color;
		padding: 10px 0 15px;
		background: transparent;
		color: inherit;
		font-weight: 600;
		line-height: inherit;
		font-size: 16px;
      &:focus {
         border-bottom-color: $main;
      }
	}
	&__title {
		line-height: 1;
		font-weight: 700;
		color: rgba($text-color, .5);
		font-size: 16px;
		white-space: nowrap;
	}
	&__textarea {
		min-width: 100%;
		min-height: 120px;
		padding: 10px;
		margin-top: 15px;
		border: 1px solid rgba($text-color,.3);
		resize: none;
		overflow: hidden;
		&:focus {
			border: 1px solid $main;
		}
	}
	&__btn-container {
		display: flex;
		width: 100%;
		justify-content: flex-end;
	}
}

.comment {
	width: calc(100% / 3 - 30px);
	min-height: 380Px;
	min-width: 280Px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #fff;
	box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
	margin-left: 30px;
	margin-bottom: 30px;
	padding: 20Px;
	@include tablets {
		width: calc(100% / 2 - 30px);
	}
	@include phones {
		width: 100%;
	}

	&__avatar {
		width: 50px;
		height: 50px;
	}

	&__head {
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba($text-color,.3);
		padding: 10Px 10Px 25Px;
	}

	&__user-container  {
		margin-left: 20px;
		.comment__user {
			font-size: 18px;
			font-weight: 700;
		}
		.comment__user-rank {
			color: rgba($text-color,.5);
		}
	}
	&__btn-wrap {
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
		.comment__btn {
			display: flex;
			align-items: center;
			color: rgba($text-color,.7);
			.btn-true,
			.btn-false {
				margin-left: 10px;
			}
			.btn-true {
				background: svg-load('pencil.svg', fill=$links-color, width=100%, height=100%) center center no-repeat;
				opacity: 1;
			}
		}
	}

	&__content {
		margin-top: 30px;
		flex: 1;
	}
}



.create-btn {
	width: calc(100% / 3 - 30px);
	min-height: 380Px;
	min-width: 280Px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
	margin-left: 30px;
	margin-bottom: 30px;
	&:hover {
		background: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
	}
	@include tablets {
		width: calc(100% / 2 - 30px);
	}
	@include phones {
		width: 100%;
		min-height: 115px;
		flex-direction: row;
	}
	&__circle {
		position: relative;
		min-width: 125px;
		min-height: 125px;
		&:before,
		&:after {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			width: 25%;
			height: 3px;
			background-color: #fff;
		}
		&::before {
			transform: translate(-50%, -50%);
		}
		&::after {
			transform: translate(-50%, -50%) rotate(90deg);
		}
		@include phones {
			min-width: 70px;
			min-height: 70px;
		}
		@include circle(auto,3px,white)
	}
	&__text {
		margin-top: 20px;
		font-size: 16px;
		font-weight: 700;
		color: white;
		@include phones {
			margin: 0 0 0 20px;
		}
	}
}

</style>