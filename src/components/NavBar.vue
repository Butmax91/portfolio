<template>
  <nav class="navbar navbar-expand-md fixed-top bg-dark navbar-dark" id="navbar">
    <div class="navbar-container container-fluid col-lg-10 ">
      <a class="navbar-brand text-uppercase" v-smooth-scroll="{duration: 1000}"  href="#hero" >But Max</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item " v-for="item in menuItems">
            <a :href="item.el" class="nav-link"  data-target="#navbarSupportedContent" v-smooth-scroll="{duration: 1000}">{{item.title}}</a>
          </li>

        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
  import $ from 'jquery';

export default {
  name: 'navbar',
  data() {
    return {
      logo: 'Loke Carlsson',
      isExpanded: false,
      menuItems: [
        {
          title: 'About',
          el: '#about',
        }, {
          title: 'Projects',
          el: '#projects',
        }, {
          title: 'Contact',
          el: '#contact',
        },
      ],
    };
  },
  mounted(){
    $('nav a').click(()=>{
      $(".navbar-collapse").collapse('hide')
    })
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/var";
  .navbar{
    &-toggler{
      outline: none;
    }
  }

</style>
