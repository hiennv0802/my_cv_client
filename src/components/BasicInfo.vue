<template>
  <div class="row">
    <h1>NGUYEN VAN HIEN</h1><br/>
    <p>Nếu đã làm việc gì, hãy phấn đấu là người số 1 lĩnh vực đó, không bao giờ thoả hiệp với vị trí thứ 2.</p>
    <p>Hãy phấn đấu hết mình, cho dù may mắn có thể không đến với bạn nhưng chắc chắn bạn sẽ không phải hối tiếc về quãng thời gian đó.</p>
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
