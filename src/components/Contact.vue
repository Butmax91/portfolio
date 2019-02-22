<template>
  <section id="contact" class="contact text-center" >
      <h2 class="contact-title text-center" v-scrollPage="'fadeInDown'">Contact</h2>
      <Separator :color="`#2e3d49`"/>
      <h5 class="contact-subtitle text-center mt-5 mb-3" v-scrollPage="'fadeInDown'">
        Looking for exiting development opportunties and friendly greets 👋
      </h5>
      <div class="contact-reveal text-center mt-3 mb-5 d-inline-block">
        <a class=""
          :href="`mailto:${email}`"

        >
            <span v-scrollPage="'fadeInDown'">Ping me</span>

        </a>
      </div>
  </section>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      email: 'butmax1991@gmail.com',
    };
  },

};
</script>
<style scoped lang="scss">
    .contact{
        margin-top: -70px;
        padding: 90px 0;
        &-reveal{
            background: #2e3d49;
            padding: 10px 20px;
            color: white;
            border-radius: 5px;
            a{
                color:white;
                &:hover{
                    text-decoration: none;
                    color: darken(white,20%);
                }
            }
        }
    }
</style>