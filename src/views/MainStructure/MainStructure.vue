<template>
 <!-- Wrapper-->
 <div id="wrapper" class="">
  <!-- Left navigation bar -->
  <SideBar />

  <!-- Main page wrapper -->
  <div id="page-wrapper" class="">
   <!-- Top navigation -->
   <TopBar />

   <!-- Main view/routes wrapper-->
   <div id="content">
    <router-view />
   </div>

   <!-- Footer -->
   <!-- <footer></footer> -->
  </div>
  <!-- End page wrapper-->
 </div>
 <!-- End wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import SideBar from "./SideBar/SideBar.vue";
import TopBar from "./TopBar/TopBar.vue";

export default defineComponent({
 name: "MainStructure",
 components: {
  HelloWorld,
  SideBar,
  TopBar,
 },
});
</script>