<template>
  <section id="projects" class="projects ">
      <h2 class="projects-title text-center" v-scrollPage="'fadeInDown'">Projects</h2>
      <Separator :color="`#2e3d49`"/>
      <div class="projects-container container-fluid flex-wrap d-flex justify-content-around">
          <Card v-for="project in getProjects" :key="project.name" :project="project"/>
      </div>


  </section>
</template>

<script>
    import {  mapGetters } from 'vuex';
    import Card from './Card.vue'

export default {
  name: 'projects',
  components: {
      Card,
  },
  data() {
    return {
    };
  },
  computed : {
     ...mapGetters(['getProjects'])
  }
};
</script>

<style lang="scss" scoped>
    .projects {
        margin-top: -50px;
        padding-top: 70px;
    }

</style>
