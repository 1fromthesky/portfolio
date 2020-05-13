import Vue from 'vue';
import Flickity from 'vue-flickity';

const massege = {
	template: '#feedback-massege',
	props: ["cardList"]
}

const window = {
	template: '#feedback-window',
	components: {massege},
	props: ["dataList"]
}

new Vue({
	el: "#feedback-component",
	template: "#feedback-container",
	components: { window , Flickity },
	data() {
		return {
			feedbackList: [],
			flickityOptions: {
				initialIndex: 0,
				prevNextButtons: false,
				pageDots: false,
				wrapAround: false,
				groupCells: true,
				freeScroll: false,
				contain: true,
			},
		}
	},
	methods: {
		next() {
		  this.$refs.flickity.next();
		},
		previous() {
		  this.$refs.flickity.previous();
		},
		makeRequireImg(array) {
			return array.map(item => {
				const requireImg = require(`../images/content/${item.avatar}`);
				item.avatar = requireImg;
				return item;
			})
		}
	},
	created() {
		const data = require('../data/feedback.json');
		this.feedbackList = this.makeRequireImg(data);
	}
})

// const prevToggle = document.querySelector('.feedback__toggles-btn_prev');
// const nextToggle = document.querySelector('.feedback__toggles-btn_next');
// const sliderMove = document.querySelector('.slider-feedback__window');
// const sliderItem = document.querySelectorAll('.feedback-review');

// const minRight = 0;
// const maxRight = sliderItem.length * 50 - 100;
// const maxRightPhones = sliderItem.length * 100;
// const step = 100;
// let currentRight = 0;
// let currentScreenWidth = document.documentElement.clientWidth;

// nextToggle.addEventListener('click', function(event) {
//    event.preventDefault();

//    if (currentRight < maxRight) {
//       currentRight += step;
//       sliderMove.style.right = currentRight + '%';
//    }
// })

// prevToggle.addEventListener('click', function(event) {
//    event.preventDefault();

//    if (currentRight > minRight) {
//       currentRight -= step;
//       sliderMove.style.right = currentRight + '%';
//    }
// })