<template>
  <section id="do" class="do " >
          <h2 class="title text-center">What I Do</h2>
            <Separator :color="'#2e3d49'"/>
          <h3 class="subtitle mt-3 text-center">I am a professional web developer and student.</h3>
          <div class="do-container col-md-10 m-auto">
            <div class="do-item text-center mt-3 col-sm-12 col-md-4 col-lg-4" v-for="item in does">
              <i :class=" item.icon" class="fa-6x"></i>
              <h3 class="mt-3">{{item.title}}</h3>
              <p>{{item.text}}</p>

            </div>

          </div>

  </section>
</template>

<script>
export default {
  name: 'do',
  data() {
    return {
      does: [
        {
          icon: 'fas fa-graduation-cap',
          title: 'Student',
          text: 'As a Computer Scientist, I get to learn about code on a deeper level such as algorithms and data structures which complements my primary interest in software and higher-level development.',
        }, {
          icon: 'fas fa-code',
          title: 'Developer',
          text: 'My strengths lie in the front-end development. Though I have extensive experience with the full stack, most recently I have focused on creating progressive web applications using React and Vue.',
        }, {
          icon: 'fas fa-pencil-alt',
          title: 'Designer',
          text: 'My interest in graphic design has led me to focus on front-end which let me be more expressive with design and UX. Excellent design is essential in crafting elegant and functional applications.',
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .do{
    margin-top: 50px;
    &-container{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

</style>
