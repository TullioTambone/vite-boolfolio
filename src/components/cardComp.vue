<script>
export default{
    name: "cardComp",
    props: ['cardProps'],

    data(){
        return{
            baseUrl:'http://127.0.0.1:8000'
        }
    },
    mounted(){
        this.getProjects()

        document.querySelector("img").onmousemove = (e) => {
            for (const img of document.getElementsByClassName("img")) {
                const rect = img.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

                img.style.setProperty("--mouse-x", `${x * 100}%`);
                img.style.setProperty("--mouse-y", `${y * 100}%`);
            }
        };
    },
}
</script>

<template>

    <!-- <img :src="`${baseUrl}/storage/${cardProps.img}`" alt=""> -->
    <h5>{{ cardProps.title }}</h5>
    <p>{{ cardProps.description }}</p>

    <p v-if="cardProps.type">{{ cardProps.type.name }}</p>

    <ul v-if="cardProps.technologies">
        <li v-for="(technology, i) in cardProps.technologies" :key="i">{{ technology.name }}</li>
    </ul>

</template>

<style scoped lang="scss">


// *:not(img){
//     opacity: 0;
//     position: relative;
//     z-index: 99;
//     &:hover > *:not(img){
//         opacity:1;
//         position: relative;
//         transition: 0.7s linear;
//     }

//     &:hover li{
//         opacity: 1;
//         transition: 0.7s linear;
//     }

// }

*{
    color: rgba(255, 255, 255, 0.781);
}

</style>