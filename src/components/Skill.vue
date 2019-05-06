<template>
  <chartjs-radar :labels="getLabel()" :datasets="getSkillValue()" :bind="true"></chartjs-radar>
</template>

<script>
export default {
  name: "Skill",
  props: ["skillInfo"],
  data() {
    return {
      datasets: [{
        label: "My Skills",
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
        data: [],
        fill: true
      }]
    }
  },
  methods: {
    getLabel: function() {
      return Object.keys(this.skillInfo);
    },
    getSkillValue: function() {
      this.datasets[0].data = Object.values(this.skillInfo);
      return this.datasets;
    }
  }
}
</script>

<style>

</style>
