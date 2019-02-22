<template>
  <section id="skills" class="skills ">
    <h2 class="skills-title text-center " v-scrollPage="'fadeInDown'">Skills</h2>
      <Separator :color="`#2e3d49`"/>
    <h3 class="skills-subtitle text-center m-5" v-scrollPage="'fadeInDown'">Technologies I work in most frequently.</h3>
    <div class="skills-container container-fluid d-flex  flex-wrap justify-content-center col-lg-10">
        <div class="skills-item col-6 col-sm-6  col-md-3 text-center mb-4"
          v-for="skill in getSkills"

         >
          <img :src="skill.image" :alt="skill.name" width="80px" :title="skill.name" v-scrollPage="'fadeInDown'">
        </div>
      </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'


export default {
  name: 'skills',
  computed : {
    ...mapGetters(['getSkills'])
  },

  components: {

  },
};
</script>

<style lang="scss" scoped>
    .skills {
        margin-top: -50px;
        padding-top: 90px;
        &-item{
            width: auto;
        }
    }
</style>
