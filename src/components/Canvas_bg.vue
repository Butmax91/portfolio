<template>
    <canvas id="canvas"></canvas>
</template>
<script>
    export default {
        mounted() {
            window.onresize = ()=>{
                if (document.querySelector('canvas')) {
                    bg()
                }
            };
            let count=0;
            let dots = [];
            function bg(){
                count++;
                let menu = getComputedStyle( document.querySelector('nav'));
                let canvas = document.querySelector('canvas');
                let w = window.innerWidth;
                canvas.style.top =menu.height;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight  ;
                let sqr = canvas.width*canvas.height;
                let ctx = canvas.getContext("2d");
                dots=[];
                class Dot {
                    constructor(){
                        this.x = Math.floor(Math.random() * (canvas.width - 20))+10;
                        this.y = Math.floor(Math.random() * (canvas.height-120 ))+120;
                        this.radius = 1;
                        this.stepCount = 0;
                        this.direction = Math.floor(8*Math.random());
                        this.color = 'white'
                    }
                    drow(){
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                        ctx.fillStyle = this.color;
                        ctx.fill();
                    }
                    move() {
                        this.drow();
                        if (this.stepCount===0){
                            this.stepCount = Math.floor(500*Math.random());
                            this.direction = Math.floor(8*Math.random());
                        }
                        else {
                            this.stepCount--;
                        }
                        switch (this.direction) {
                            case 0:
                                // вверх
                                this.y -= .1;
                                break;
                            case 1:
                                // вправо
                                this.x += .1;
                                break;
                            case 2:
                                // вниз
                                this.y += .1;
                                break;
                            case 3:
                                // влево
                                this.x -= .1;
                                break;
                            case 4:
                                // вправо вверх
                                this.x += .1;
                                this.y -= .1;
                                break;
                            case 5:
                                // вправо вниз
                                this.x += .1;
                                this.y += .1;
                                break;
                            case 6:
                                // влево вниз
                                this.x -= .1;
                                this.y += .1;
                                break;
                            case 7:
                                // влево вверх
                                this.x -= .1;
                                this.y -= .1;
                                break;
                        }
                        if (this.x < 10 || this.x > canvas.width-10 || this.y < 60|| this.y > canvas.height-10) {
                            this.stepCount = 0;
                        }else {
                            this.color = 'white';
                        }
                    }
                }
                function drowLine(array) {
                    array.forEach((elem,i,arr)=>{
                        for (let j = 0; j <arr.length ; j++) {
                            if(elem === arr[j]){
                                continue;
                            }else if(Math.pow( Math.pow((elem.x - arr[j].x),2) + Math.pow((elem.y - arr[j].y),2),0.5) < 150 ){
                                ctx.beginPath();
                                ctx.moveTo(elem.x,elem.y);
                                ctx.lineWidth =1- Math.pow( Math.pow((elem.x - arr[j].x),2) + Math.pow((elem.y - arr[j].y),2),0.5)/225;
                                ctx.strokeStyle = `rgba(255,255,255,${ctx.lineWidth*0.2})`;
                                ctx.lineTo(arr[j].x,arr[j].y);
                                ctx.stroke();
                            }
                        }
                    });
                }
                for (let i = 0; i < sqr/10000; i++) {
                    dots.push(new Dot());
                    dots[i].move();
                }
                setInterval(()=>{
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    drowLine(dots);
                    for (let i = 0; i <dots.length ; i++) {
                        dots[i].move();
                    }
                },40);
            };
            bg()
        },
    }
</script>
<style lang="scss" scoped>
    #canvas{
        background:black;
        position: absolute;
        width: 100%;
        left: 0;
        top:0 !important;
        right: 0;
        bottom: 0;
        height: 100vh;
        z-index: -5;
    }
</style>