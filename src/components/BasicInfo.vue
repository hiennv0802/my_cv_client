<template>
  <div class="">
    <div class="col-md-12">
      <h2 class="text-center">NGUYEN VAN HIEN</h2><br/>
      <p>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</p>
    </div>
    <div class="row">
      <div class="col-md-5">
        <img src="../assets/user-avatar.png" class="user-avatar">
      </div>
      <div class="col-md-7">
        <table class="table">
          <tr v-for="(value, key) in basicInfo">
            <td>{{value["name"]}}</td>
            <td>
              <span v-if="value['name'] != 'Facebook' && value['name'] != 'Github'">{{value["value"]}}</span>
              <a v-if="value['name'] == 'Facebook' || value['name'] == 'Github'" v-bind:href="value['value']" target="_blank">
                {{value['value']}}
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
