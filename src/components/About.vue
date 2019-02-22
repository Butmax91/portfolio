<template>
  <section id="about" class="about container-fluid">
    <div class="about-container">
      <div class="about-avatar" v-scrollPage="'fadeInDown'" v-if="false">
      </div>
      <h2 class="about-title " v-scrollPage="'fadeInDown'" >About</h2>
      <Separator :color="`#2e3d49`"/>
      <div class="about-text text-capitalize col-12 col-md-8 text-center p-0"  v-scrollPage="'fadeInDown'">
        I’m a Front-end Developer. I have been learning and doing a different kind of tasks using JavaScript / HTML5 / CSS3 and have a big passion to grow and know even more. Recently I learned Vue.js/MySQL and created a website for my portfolio.

        My analytical skills help me to quickly learn and be up to date with the latest technologies and approaches.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      some: 'ololo'
    }
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
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 30%, 0);
        -ms-transform: translate3d(0, 30%, 0);
        transform: translate3d(0, 30%, 0);
      }
      100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
      }
    }

    .fadeInUp {
      animation-name: fadeInUp;
      animation-timing-function: ease-out;
    }
</style>

