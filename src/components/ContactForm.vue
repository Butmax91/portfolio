<template>
    <section id="contact" class="contact text-center "  >
        <h2 class="contact-title text-center" v-scrollPage="'fadeInDown'">Contact</h2>
        <Separator :color="`#2e3d49`"/>
        <h5 class="contact-subtitle text-center mt-5 mb-3" v-scrollPage="'fadeInDown'">
            Looking for exiting development opportunties and friendly greets 👋
        </h5>
        <form action="" method="post" class="container-fluid mt-5" v-if="show" >
            <input type="text" placeholder="input your name" name="name" class="col-sm-8 col-md-6 "  v-model="name" required>
            <input type="email" placeholder="input your email" name="email" class="col-sm-8 col-md-6"  v-model="email" required>
            <textarea name="messge"  cols="30" rows="3" placeholder="input message" class="col-sm-8 col-md-6"  v-model="message" required></textarea>
            <button @click.prevent="sendMessage">submit</button>
        </form>
        <div class="thanks" v-else>
            <h3 class="text-center m-5">Thank you, your message has been sent</h3>
        </div>
    </section>
</template>
<script>

    export default {
        data(){
            return {
                name:'',
                email:'',
                message:'',
                show: true
            }
        },
        methods : {
            sendMessage() {
                this.show = !this.show;
              /*  fetch('/form', {
                    method: 'post',
                    body: JSON.stringify({
                        name: this.name,
                        email: this.email,
                        message: this.message
                    })
                }).then(r=>r.json())
                    .then(data=>{
                        if(data){

                        }
                    })*/
            }
        }
    }
</script>

<style lang="scss" scoped>
    .contact {
        margin-top: -70px;
        padding: 90px 0 10px;
        form{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            input,textarea,button{
                margin: 10px 0;
                padding: 5px;
                outline: none;
                border-width: 2px;
                border-color: transparent;
                border-bottom:1px solid #2e3d49;
            }
            button{
                cursor: pointer;
                background: #2e3d49;
                padding: 10px 20px;
                color: white;
                border-radius: 5px;
                &:hover{
                    text-decoration: none;
                    color: darken(white,20%);
                }
            }
        }
    }

</style>