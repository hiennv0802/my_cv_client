<template>
  <div class="row">
    <div class="col-sm-3" v-for="skill in otherSkillArr(otherSkillInfo)">
      <h5 class="text-left">- {{skill}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherSkill",
  props: ["otherSkillInfo"],
  methods: {
    otherSkillArr: function(data) {
      console.log(data);
      return data.toString().split(",");
    }
  }
}
</script>

<style>

</style>
