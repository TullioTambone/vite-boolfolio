<script>
export default{
    name: "cardComp",
    props: ['cardProps'],

    data(){
        return{
            baseUrl:'http://127.0.0.1:8000'
        }
    }
}
</script>

<template>

    <img :src="`${baseUrl}/storage/${cardProps.img}`" alt="">
    <h5>{{ cardProps.title }}</h5>
    <p>{{ cardProps.description }}</p>

    <p v-if="cardProps.type">{{ cardProps.type.name }}</p>

    <ul v-if="cardProps.technologies">
        <li v-for="(technology, i) in cardProps.technologies" :key="i">{{ technology.name }}</li>
    </ul>

</template>

<style scoped lang="scss">
img{
    position: absolute;
    inset: 0;
    width: 100%;
    filter: brightness(50%);
    display: none;
}

*:not(img){
    opacity: 0;
    &:hover > *:not(img){
        opacity:1;
        position: relative;
        z-index: 1;
        transition: 0.7s linear;
    }

    &:hover li{
        opacity: 1;
        transition: 0.7s linear;
    }

}

</style>