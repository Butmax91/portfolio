import Vue from 'vue';



export default {
    inserted:  (el,binding)=>{

        let elemTop = el.offsetTop;
        let elemDisplay = getComputedStyle(el).display;
        let height = window.innerHeight;
        el.classList.add('animated');
        el.style.visibility = 'hidden';
        addAnimate();
        if(binding.value) {
            el.classList.add('animated');
            window.addEventListener("scroll", (e) => {
                addAnimate()

            })
        }
        function addAnimate() {
            let scroll = window.pageYOffset;
            if (elemTop < scroll + height) {
                el.style.visibility = 'visible';
                el.classList.add( binding.value);
            }
        }

    }
}

