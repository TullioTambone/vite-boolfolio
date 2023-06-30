<script >
import HeaderComp from './components/HeaderComp.vue';


export default{
  components:{
    HeaderComp,
  },
  data(){
    return{

    }
  },
  mounted(){
  },

  methods:{
  }
}
</script>

<template>

  <HeaderComp/>
  <RouterView>
  </RouterView>

</template>

<style lang="scss">
@use './style/main.scss';

</style>
