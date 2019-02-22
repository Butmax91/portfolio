<template>
  <footer class="footer ">
        <div class="copi text-center text-white mb-3">
          © 2019 Max But, made with lots of ❤️ and steaming hot ☕️.
        </div>
        <div class="social-container text-center">
          <a class="icon"
            v-for="item in social"
            :href="item.link"
            :key="item.id"
            target="_blank"
            rel="noopener">
            <i :class="item.icon" class="m-2"></i>
          </a>
        </div>

  </footer>
</template>

<script>
export default {
  name: 'copyright',

  data() {
    return {
      social: [
        {
          icon: 'fab fa-facebook-f',
          link: 'https://www.facebook.com/max.but.75',
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/Butmax91',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
  .footer{
    background: black;
      padding: 40px ;
      a {
          color:white;
          &:hover{
              color:darken(white,20%)
          }
      }
  }
</style>