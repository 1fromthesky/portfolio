import Vue from "vue";

const skill = {
   template: '#skill',
   props: ['skill'],
   methods: {
      countCirclePercent() {
         const circle = this.$refs['circle'];
         const dashArray = parseInt(getComputedStyle(circle).getPropertyValue('stroke-dasharray'));
         const percent = (dashArray / 100) * (100 - this.skill.percent)
         circle.style.strokeDashoffset = percent;
      }
   },
   mounted() {
      this.countCirclePercent();
   }
}
const valuesList = {
   template: '#values-list',
   components: {
      skill
   },
   props: ["category"]
}

new Vue({
   el: "#values-component",
   template: "#values",
   components: {
      valuesList,
      skill,
   },
   data() {
      return {
         skills: []
      }
   },
   created() {
      const data = require("../data/skills.json")
      this.skills = data;
   }
});