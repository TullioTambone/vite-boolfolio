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

    <div class="card">
        <img :src="`${baseUrl}/storage/${cardProps.img}`" alt="" class="img-fluid">
        <h5>{{ cardProps.title }}</h5>
        <p>{{ cardProps.description }}</p>
    
        <p v-if="cardProps.type"><span>{{ cardProps.type.name }}</span></p>
    
        <ul v-if="cardProps.technologies">
            <li v-for="(technology, i) in cardProps.technologies" :key="i">{{ technology.name }}</li>
        </ul>
    </div>

</template>

<style scoped lang="scss">
</style>