<template>
  <section id="hero"  class="hero">
      <Canvas/>
      <div class="hero-container container-fluid text-center  ">
            <h1 class="hero-logo text-uppercase">But Max</h1>
            <Separator :color="'white'"/>
            <h5 class="hero-subtitle ">{{ subtitle }}</h5>
             <a class="hero-link" href="#about" v-smooth-scroll="{duration: 1000}">
              <i class="fas fa-3x fa-angle-down"></i>
             </a>
      </div>

  </section>
</template>

<script>
import NavBar from './NavBar';
import Canvas from './Canvas_bg.vue'

export default {
  name: 'hero',
  components: {
      NavBar,
      Canvas
  },
  data() {
    return {
      title: 'Portfolio',
      subtitle: 'Building the web, one line of code at a time.',
    };
  },

};
</script>

<style lang="scss" scoped>
    @import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";
    @import url('https://fonts.googleapis.com/css?family=Orbitron');

  .hero{
      height: 100vh;
      overflow: auto;
      overflow-x: hidden;
      width: 100vw;
      &-logo {
          margin-top: 20vh;
          margin-bottom: 10vh;
          color: white;
          border: 3px solid white;
          border-radius: 8px;
          display: inline-block;
          padding: 20px 20px 10px;
          font-family: 'Orbitron', sans-serif;
      }
      &-subtitle{
          color:white;
          margin: 4vh 0;
      }
      &-link{
          color:white;
      }

  }
</style>
