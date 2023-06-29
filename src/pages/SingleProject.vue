<script>
import axios from 'axios';
import cardComp from '../components/cardComp.vue'
export default{
    components:{
        cardComp,
    },
    data(){
        return{
            baseUrl:'http://127.0.0.1:8000',
            project: null
        }
    },
    created(){
        this.getSingleProject()
    },
    methods:{
        getSingleProject(){
            axios.get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`)
            .then(res => {
                if(res.data.success){
                    this.project = res.data.project
                }else{
                    this.$router.push({name: 'NotFound'})
                }
            })
        }
    }
}
</script>

<template>
    <div class="container mt-2">
        <cardComp :cardProps="project" id="card"/>
    </div>
</template>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>