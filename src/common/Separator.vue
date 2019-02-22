<template>
    <div class="separator text-center col-12  justify-content-center  mb-5 mt-5" v-scrollPage="'fadeInRight'">
        <span class="leftLine" :style="getColorLine"></span>
        <div class="separator-img " :style="getColorImg">
            ❖
        </div>
        <span class="rightLine" :style="getColorLine"></span>
    </div>
</template>
<script>
    export default {
        props:['color'],
        computed : {
            getColorLine(){
                return `border-top: 1px solid ${this.color}`
            },
            getColorImg(){
                return `color: ${this.color}`
            }
        }
    }
</script>
<style lang="scss" scoped>
    .separator{
        margin: auto;
        display: flex;
        &-img{
            font-size: 20px;
        }
        span{
            display: inline-block;
            width: 30%;
            height: 0;
            border-top: 1px solid white;
            position: relative;
            top:15px;
            margin: 0 15px;
        }
    }


</style>