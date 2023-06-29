<script >

import axios from 'axios';
import cardComp from '../components/cardComp.vue';

export default{
  components:{
    cardComp,
  },
  data(){
    return{
      projects:[],
      baseUrl:'http://127.0.0.1:8000'
    }
  },
  mounted(){
  this.getProjects()
  },

  methods:{
    getProjects(){
      axios.get(`${this.baseUrl}/api/projects`)
      .then(res => {
        
        this.projects=res.data.projects
      })
    }
  }
}
</script>

<template>
<div class="container">
  <div class="row">
    <RouterLink v-for="(e, index) in projects" :key="index" class="col-12 col-md-6 col-lg-4 " :to="{ name: 'SingleProject', params:{slug:e.slug}}">
        <cardComp :cardProps="e"/>
    </RouterLink>
  </div>
</div>
</template>

<style lang="scss">
@use '../style/main.scss';
</style>
