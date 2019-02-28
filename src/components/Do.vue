<template>
    <section class="Do container-fluid text-center p-0">
        <h2 class="m-5">What I do</h2>
        <Separator :color="'#2e3d49'"/>
        <div class="do-container p-0 d-flex justify-content-around col-lg-8 col-md-10 col-sm-12 m-auto flex-wrap">
            <ul class="text-left col-12 col-sm-6 text-justify" v-scrollPage="'fadeInLeft'">
                <li>Convert PSD layouts  to HTML</li>
                <li>Adaptation of new and ready pages for mobile devices</li>
                <li>Implementation of JavaScript logic (sliders, popups, animations, AJAX, etc.)</li>
            </ul>
            <div class="container-skills col-12 col-sm-6" v-scrollPage="'fadeInRight'">
                <h5>Some of my skills include:</h5>
                <ul class="skills container-fluid d-flex flex-wrap justify-content-around " >
                    <li v-for="item in getSkills" class=" skill m-1"><img :src="item.image" :alt="item.name" width="30"><span>{{item.name}}</span> </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'skills',
        computed : {
            ...mapGetters(['getSkills'])
        },
    }
</script>
<style scoped lang="scss">
    ul{
        list-style: none;
    }

</style>