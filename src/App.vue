<template>
  <div id="app" class="container">
    <basic-info :basicInfo="basic"></basic-info>
    <education-work :educationWork="work"></education-work>
    <project :projectInfo="projects"></project>
    <skill :skillInfo="skills"></skill>
    <knowledge :knowledgeInfo="knowledge"></knowledge>
    <other-skill :otherSkillInfo="otherSkill"></other-skill>
    <favorite :favoriteInfo="favorite"></favorite>
  </div>
</template>

<script>
import BasicInfo from "./components/BasicInfo.vue"
import EducationWork from "./components/EducationWork.vue"
import Skill from "./components/Skill.vue"
import Knowledge from "./components/Knowledge.vue"
import OtherSkill from "./components/OtherSkill.vue"
import Favorite from "./components/Favorite.vue"
import Project from "./components/Project.vue"
import axios from "axios";

export default {
  name: "app",
  components: {
    BasicInfo,
    EducationWork,
    Skill,
    Knowledge,
    OtherSkill,
    Favorite,
    Project
  },
  props: ["basicInfo", "educationWork", "skillInfo", "knowledgeInfo",
    "otherSkillInfo", "favoriteInfo", "projectInfo"],
  data() {
    return {
      info: null,
      basic: null,
      work: null,
      skills: {},
      knowledge: {},
      otherSkill: {},
      favorite: {},
      projects: {}
    }
  },
  mounted() {
    axios.get("get_data").then(response => {
      this.info = response.data.info;
      this.basic = this.info["basic-info"];
      this.work = this.info["work_schedule"];
      this.skills = this.info["skills"];
      this.knowledge = this.info["knowledge"];
      this.otherSkill = this.info["other_skills"];
      this.favorite = this.info["favorite"];
      this.projects = this.info["projects"];
    })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
