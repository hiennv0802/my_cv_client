<template>
  <div class="row">
    <div class="col-md-12">
      <h3 class="text-center">Projects</h3>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Time</th>
          <th scope="col">Name</th>
          <th scope="col">Size</th>
          <th scope="col">Technology</th>
          <th scope="col">Corporation</th>
          <th scope="col">Product url</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projectInfo">
          <td scope="col">{{project.time}}</td>
          <td scope="col">{{project.name}}</td>
          <td scope="col">{{project.size}}</td>
          <td scope="col">{{project.tech}}</td>
          <td scope="col">{{project.corporation}}</td>
          <td scope="col">
            <a href="project.product_url" target="_blank">
              {{project.product_url}}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="col-md-12 text-left">
      <span style="font-size: 20px;">Contributor of some projects:</span><br/>
      Devfunny(<a href="https://laucuoi.com" target="_blank">https://laucuoi.com</a>),
      Bunbu employee timesheet(<a href="https://bunbu-timesheet.herokuapp.com" target="_blank">https://bunbu-timesheet.herokuapp.com</a>), Topica internal project...
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["projectInfo"],
}
</script>

<style>
</style>
