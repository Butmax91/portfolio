<template>
  <div class="col-12 col-sm-6 text-center col-md-6 col-lg-6 col-xl-4 pb-2 " v-scrollPage="'fadeInDown'">
      <div class="card pb-3">
        <img ref="img" :src="project.img"  :alt="project.alt">
        <h4 class="m-2">{{project.name}}</h4>
        <div class="card-technologies">
         <span class="card-technologyes-technology" v-for="item in project.technologyes">{{item}}</span>
        </div>
        <div class="card-description">
          {{project.description}}
        </div>
        <div class="card-links">
          <a :href="project.links.gitHub.url" target="_blank"><i class="fab fa-github link"></i> {{project.links.gitHub.title}}</a>
          <a :href="project.links.demo.url" target="_blank"  class="link" v-if="project.links.demo.url">{{project.links.demo.title}}</a>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props:['project'],


}
</script>
<style lang="scss" scoped>
  .card{
    padding-top: 5px;
    img{
      height: calc(1vw*25);
      @media (max-width: 576px){
        height:calc(1vw*60);
    }
    }
    &-technologyes-technology{
      border-radius: 3px;
      margin: 3px;
      padding: 3px;
      border:1px solid #2e3d49;
    }
    &-description{
      margin: 10px 0;
    }
    &-links a{
      padding: 5px;
      background: #2e3d49;
      color: white;
      margin: 5px;
      border-radius: 5px;
      &:hover{
        text-decoration: none;
        color: darken(white,20%);
      }
    }
  }
</style>


