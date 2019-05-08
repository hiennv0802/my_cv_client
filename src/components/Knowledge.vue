<template>
  <div class="row col-md-12 row-knowledge">
    <div class="col-md-5 wrap-knowledge" v-for="(value, key) in knowledgeInfo">
      <h5 class="text-left">{{key}}</h5>
      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar"
          aria-valuenow="25" aria-valuemin="0"
          aria-valuemax="100" v-bind:style="{width: value + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Knowledge",
  props: ["knowledgeInfo"]
}
</script>

<style>
.row-knowledge {
  margin-top: 20px;
  margin-bottom: 20px;
}
.progress {
  height: 22px !important;
}
.wrap-knowledge {
  margin-bottom: 10px;
}
</style>
