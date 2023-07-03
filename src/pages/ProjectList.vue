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
      baseUrl:'http://127.0.0.1:8000',
      currentPage: 1,
      lastPage: null,
      types: [],
      selectedType: "all",
      technologies: null,
      selectedTechnologies: []
    }
  },
  mounted(){
    this.getProjects(1),
    this.getTypes(),
    this.getTechnologies(),

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

  watch:{
    selectedTechnologies:{
      handler: 'getProjects',
      deep: true,
    }
  },

  methods:{
    getProjects(projectApiPage){
    const params = {
      page: projectApiPage
    }

    if(this.selectedType !== 'all'){
      params.type_id = this.selectedType
    }

    if(this.selectedTechnologies.length > 0){
      params.technologies_ids = this.selectedTechnologies.join(',')
    }

    axios.get(`${this.baseUrl}/api/projects`, { params }).then(res=>{
      this.projects=res.data.projects.data
      this.currentPage = res.data.projects.current_page
      this.lastPage = res.data.projects.last_page
    })
    },

    getTypes(){
      axios.get(`${this.baseUrl}/api/types`).then(res => {
        this.types=res.data.types
      })
    },

    getTechnologies(){
    axios.get(`${this.baseUrl}/api/technologies`).then(res => {
      this.technologies = res.data.technologies
    })
  }
  }
}
</script>

<template>
<div class="container">


  <div class="mb-3">
    <label for="" class="form-label text-white">Types Filter</label>
    <select @change="getProjects()" v-model="selectedType" class="form-select form-select-lg" name="" id="">
      <option value="all"> -- All -- </option>

      <option v-for="(e, i) in this.types" :key="i" :value="e.id">{{ e.name }}</option>

    </select>
  </div>

  <div class="mb-3">
    <h4 class="text-white">technologies Filter</h4>
    <label for="" class="form-label text-white" v-for="(e, i) in technologies" :key="i">
      <input type="checkbox" name="" id="" :value="e.id" v-model="selectedTechnologies">
      {{ e.name }}
    </label>

  </div>

  <div id="my-row">
    <RouterLink  v-for="(e, index) in projects" :key="index" :to="{ name: 'SingleProject', params:{slug:e.slug}}" class="my-card">
      <div class="card-content">
        <cardComp :cardProps="e"/>
      </div>
    </RouterLink>

  </div>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a @click.prevent="getProjects(currentPage - 1) " class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true" >&laquo;</span>
        </a>
      </li>
      <li v-for="(e, i) in lastPage" :key="i" :class="(currentPage === e) ? 'active' : ''" class="page-item">
        <a @click.prevent="getProjects(e)" class="page-link" href="#">
          {{ e }}
        </a>
      </li>
      <li class="page-item">
        <a  @click.prevent="getProjects(currentPage + 1) " class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav{
  margin: 20px auto;
}
.container {
  height: 100vh;
  width: calc(100% - 200px);
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15em;

  #my-row{   
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    &:hover > .my-card::after{
        opacity: 1;
      }
    .my-card{
      width: calc(100%/3 - 4px);
      aspect-ratio: 1;
      background-color: rgba($color: #fff, $alpha: 0.1);
      border-radius: 10px;
      position: relative;
      display: flex;

      &::after,
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

      &::after{
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
