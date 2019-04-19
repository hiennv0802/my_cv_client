<template>
  <div>
    <h1>NGUYEN VAN HIEN</h1>
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
            <td>{{value}}</td>
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
  width: 200px;
  height: 335px;
}
</style>
