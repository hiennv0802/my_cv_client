<template>
  <div class="row">
    <div class="col-md-12">
      <h3 class="text-center">EDUCATION AND WORK</h3><br/>
    </div>
    <table class="table table-vertical-align-middle">
      <tr v-for="(value) in educationWork">
        <th>
          <div class="edu-year">
            {{value.start_date}}
            <hr>
            {{value.end_date}}
          </div>
        </th>
        <td>{{value.desc}}</td>
        <td>
          <img :src="imageUrl()" class="certification_logo"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "EducationWork",
  props: ["educationWork"],
  methods: {
    imageUrl: function() {
      return require("../assets/framgia.jpg");
    }
  }
}
</script>

<style>
.edu-year {
  text-align: center;
  padding: 20px 0;
  border: 1px solid grey;
  border-radius: 45px;
  width: 90px;
  height: 91px;
}
.table-vertical-align-middle {
  width: 80% !important;
  tr {
    height: 125px;
  }
}
.certification_logo {
  width: 30%;
  min-width: 100px;
  max-width: 250px;
}
.table-vertical-align-middle th {
  vertical-align: middle !important;
}
.edu-year hr {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
