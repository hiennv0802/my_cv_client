<template>
  <div class="row favorite">
    <div class="col-md-12">
      <h3 class="text-center">Favorite</h3>
    </div>
    <div class="col-md-12 text-center"><h5>{{favoriteInfo}}</h5></div>
  </div>
</template>

<script>
export default {
  name: "Favorite",
  props: ["favoriteInfo"]
}
</script>

<style>
.favorite {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
