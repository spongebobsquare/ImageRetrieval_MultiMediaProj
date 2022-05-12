<template>
  <NavBar v-show="showMenu"/>
  <div class="content-box">
    <router-view @showLeftMenu="toggleShowMenu"/>
    <UploadPic v-show="showMenu"/>
  </div>

</template>

<script>
import UploadPic from "@/components/UploadPic";
import NavBar from "@/components/NavBar";

export default {
  components: {
    UploadPic,
    NavBar,
  },
  data(){
    return{
      showMenu:true,
    };
  },

  methods:{
    toggleShowMenu(){
      this.showMenu = !this.showMenu;
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin:0;
  /*background-color: #fff;*/
  background-color: #f3f5fa;


}

.content-box{
//max-height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

</style>


