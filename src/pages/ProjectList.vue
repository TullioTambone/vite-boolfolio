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

    document.getElementById("my-row").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("my-card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
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
  <div id="my-row">
    <RouterLink v-for="(e, index) in projects" :key="index" :to="{ name: 'SingleProject', params:{slug:e.slug}}" class="my-card">
      <div class="card-border"></div>
      <div class="card-content">
        <cardComp :cardProps="e"/>
      </div>
    </RouterLink>
  </div>
</div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  height: 100vh;
  width: calc(100% - 200px);
  position: absolute;
  right: 0;
  #my-row{   
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 4px;
    &:hover > .my-card > .card-border{
        opacity: 1;
      }
    .my-card{
      width: calc(100% / 3 - 4px);
      background-color: rgba($color: #fff, $alpha: 0.1);
      border-radius: 10px;
      position: relative;
      display: flex;

      .card-border,
      &::before{
        content: '';
        position: absolute;
        border-radius: inherit;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: opacity 500ms;
      }

      &::before{
        background: radial-gradient(
          800px circle at var(--mouse-x) var(--mouse-y),
          rgba(255, 255, 255, 0.06), transparent 40%
        );
        z-index: 3;
      }

      .card-border{
        background: radial-gradient(
          600px circle at var(--mouse-x) var(--mouse-y),
          rgba(255, 255, 255, 0.526), transparent 40%
        );
        z-index: 1;
      }

      &:hover::before{
        opacity: 1;
      }

     

      .card-content{
        background-color: rgb(23, 23, 23);
        border-radius: inherit;
        height: calc(100% - 2px);
        width: calc(100% - 1px);
        margin: 1px 0.9px;
        position: relative;
        z-index: 2;
      }
    }
  }
}
</style>
