<template>
  <div id="app" v-cloak>
    <NavBar></NavBar>
    <hero></hero>
    <About/>
    <Do/>
    <projects/>
    <ContactForm/>
    <copyright/>
  </div>
</template>

<script>
  import Hero from './components/Hero';
  import About from './components/About';
  import Do from './components/Do';
  import Projects from './components/Projects';
  //import Skills from './components/Skills';
  import Contact from './components/Contact';
  import Copyright from './components/Copyright';
  import NavBar from './components/NavBar'
  import ContactForm from './components/ContactForm'

  export default {
    name: 'app',
    components: {
      NavBar,
      Hero,
      About,
      Do,
      Projects,
      Contact,
        ContactForm,
      Copyright,
    },
  };
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  @import "assets/styles/var";
  @import "~animate.css";

  #app {
    height: 100%;
    width: 100%;
    overflow: hidden;
    color:#2e3d49;
  }
</style>