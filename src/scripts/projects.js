import Vue from 'vue';

const toggles = {
   template: '#projects-toggles',
}
const previews = {
   template: '#projects-previews',
   props: ['project', 'currentProject'],
}
const display = {
   template: '#projects-display',
   components: {toggles, previews},
   props: ['currentProject', 'project'],
}
const tags = {
   template: '#projects-tags',
   props: ['tags']
}
const info = {
   template: '#projects-info',
   components: {tags},
   props: ['currentProject'],
   computed: {
      tagsArr() {
         return this.currentProject.skills.split(',');
      }
   }
}

new Vue({
   el: '#perform-slider',
   template: '#projects-container',
   components: {display, info},
   data() {
      return {
         project: [],
         currentIndex: 0
      }
   },
   computed: {
      currentProject() {
         return this.project[this.currentIndex];
      }
   },
   watch: {
      currentIndex(value) {
         this.makeInfiniteLoop(value)
      },
   },
   methods: {
      makeInfiniteLoop(value) {
         const projectsFromData = this.project.length - 1;
         if (value > projectsFromData) {
            this.currentIndex = 0
         };
         if (value < 0) {
            this.currentIndex = projectsFromData;
         };
      },
      handleSlide(direction) {
         switch(direction) {
            case 'next':
               this.currentIndex++;
               break;
            case 'prev':
               this.currentIndex--;
               break;
         }
      },
      makeArrayRequire(array) {
         return array.map((item) => {
            const requirePic = require(`../images/content/${item.photo}`);
            item.photo = requirePic;
            return item;
         })
      }
   },
   created() {
      const data = require('../data/projects.json');
      this.project = this.makeArrayRequire(data);
   }

})