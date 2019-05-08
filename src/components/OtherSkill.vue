<template>
  <div class="row">
    <div class="col-sm-3" v-for="skill in this.skillArr">
      <h5 class="text-left">- {{skill}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherSkill",
  props: ["otherSkillInfo"],
  computed: {
    skillArr: function() {
      return this.otherSkillInfo.split(",");
    }
  }
}
</script>

<style>

</style>
