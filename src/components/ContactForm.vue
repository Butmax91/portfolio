<template>
    <section id="contact" class="contact text-center "  >
        <h2 class="contact-title text-center" v-scrollPage="'fadeInDown'">Contact</h2>
        <Separator :color="`#2e3d49`"/>
        <h5 class="contact-subtitle text-center mt-5 mb-3" v-scrollPage="'fadeInDown'">
            Looking for exiting development opportunties and friendly greets 👋
        </h5>
        <form action="" method="post" class="container-fluid mt-5" v-if="show" >
            <input type="text" placeholder="input your name" name="name" class="col-sm-8 col-md-6 "  v-model="name" >
            <p  :class="{visible:showNameWarn}" class="warning">This field is required</p>
            <input type="email" placeholder="input your email" name="email" class="col-sm-8 col-md-6"  v-model="email" >
            <p  :class="{visible:showEmailWarn}" class="warning">This field is required and must have @</p>
            <textarea name="message"  cols="30" rows="3" placeholder="input message" class="col-sm-8 col-md-6"  v-model="message" ></textarea>
            <p :class="{visible:showMessageWarn}" class="warning">This field is required and must have 20 characters at least</p>

            <button @click.prevent="sendMessage" >submit  </button>

        </form>
        <div class="thanks" v-else >
            <h3 class="text-center m-5">Thank you, your message has been sent</h3>
        </div>
    </section>
</template>
<script>

    export default {
        data(){
            return {
                name:'',
                showNameWarn:false,
                email:'',
                showEmailWarn: false,
                message:'',
                showMessageWarn:false,
                show: true
            }
        },
        methods : {
            sendMessage() {
                (()=>{
                    if(this.name.length < 5){
                        this.showNameWarn = true;
                    }else this.showNameWarn = false ;
                    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

                    if (!filter.test(this.email)) {
                        this.showEmailWarn = true;
                    }else  this.showEmailWarn = false;
                    if (this.message.length < 5){
                        this.showMessageWarn = true
                    } else this.showMessageWarn=false

                })()
                if (!this.showNameWarn && !this.showEmailWarn && !this.showMessageWarn) {
                    fetch('/form', {
                        method: 'post',
                        body: JSON.stringify({
                            name: this.name,
                            email: this.email,
                            message: this.message
                        })
                    }).then(r => r.json())
                        .then(data => {
                            if (data) {
                                this.show = !this.show;
                            }
                        })
                }
            }
        },
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
            .warning{
                color:red;
                font-size: 12px;
                visibility: hidden;
            }
            button{
                cursor: pointer;
                background: #2e3d49;
                padding: 10px 20px;
                color: white;
                border-radius: 5px;
                &:hover{
                    color: darken(white,20%);
                }
            }
            .visible{
                visibility: visible;
            }
        }
    }

</style>