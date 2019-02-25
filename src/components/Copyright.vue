<template>
  <footer class="footer ">
        <div class="copi text-center text-white mb-3">
          © 2019 Max But, made with lots of ❤️ and steaming hot ☕️.
        </div>
  </footer>
</template>

<script>
export default {
  name: 'copyright',

  data() {
    return {

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