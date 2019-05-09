<template>
  <div class="row">
    <div class="col-md-12">
      <h2 class="text-center">NGUYEN VAN HIEN</h2><br/>
      <p>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</p>
    </div>
    <div class="row">
      <div class="col-sm-5">
        <img src="../assets/user-avatar.png" class="user-avatar">
      </div>
      <div class="col-sm-7">
        <table class="table">
          <tr v-for="(value, key) in basicInfo">
            <td>{{key}}</td>
            <td>
              <span v-if="key != 'Facebook' && key != 'Github'">{{value}}</span>
              <a v-if="key == 'Facebook' || key == 'Github'" v-bind:href="value" target="_blank">
                {{value}}
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicInfo",
  props: ["basicInfo"]
}
</script>

<style>
.user-avatar {
  width: 250px;
  height: 419px;
}
</style>
