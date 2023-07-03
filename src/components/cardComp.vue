<script>
export default{
    name: "cardComp",
    props: ['cardProps'],

    data(){
        return{
            baseUrl:'http://127.0.0.1:8000'
        }
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


// *{
//     opacity: 0;
//     position: relative;
//     z-index: 99;
//     &:hover > *{
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