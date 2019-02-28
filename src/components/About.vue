<template>
  <section id="about" class="about container-fluid">
    <div class="about-container">
      <div class="about-avatar" v-scrollPage="'fadeInDown'" v-if="false">
      </div>
      <h2 class="about-title " v-scrollPage="'fadeInDown'" >About</h2>
      <Separator :color="`#2e3d49`"/>
      <div class="about-text text-capitalize col-12 col-md-8 col-lg-6 text-center p-0"  v-scrollPage="'fadeInDown'">
        Hello!
        I’m Max, a Front-end Developer.
        I’m constantly learning web technologies and other design related topics,
        currently playing around with Javascript.
         and have a big passion to grow and know even more.
        Recently I learned Vue.js.
        My analytical skills help me to quickly learn and be up to date with the latest technologies and approaches.
      </div>
    </div>

  </section>



</template>

<script>
  import {mapGetters} from 'vuex'
export default {
  name: 'about',
  computed :{
  ...mapGetters(['getSkills'])
  }

};
</script>
<style scoped lang="scss">
    @import "../assets/styles/var";

  .about{
    margin-top:-50px;
    padding-top: 50px;
    &-container{
      display: flex;
      flex-direction: column;
    }
    &-avatar{
      border:1px solid black;
      width: 150px;
      height:150px;
      border-radius: 50%;
      margin:50px auto 0;
    }
    &-title{
      text-align: center;
      margin-top: 50px;
    }
    &-text{
      margin: auto;
      text-align: center;
      margin-bottom: 50px;
      font-size: 20px;
    }
  }
    .skill{
      font-size: 10px;
    }
  .skills{
    list-style: none;
    display: flex;
    align-items: flex-start;
    margin: 30px 0;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>

