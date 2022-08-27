<template src="./SideBar.html" />

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SideBar',
    mounted() {

      if (!$("#sidebar").hasClass("min")) {
        var alreadySelected = $(".sub-menu").has(<HTMLElement><unknown>$('.router-link-exact-active'))
        alreadySelected.css("max-height", alreadySelected.prop("scrollHeight"))
      }

      var sideBarMinObserver = new MutationObserver(function (event) {
        if ($(event[0].target).hasClass('min')) {
          $('.sub-menu').css("max-height", 0)
        } else {
          var alreadySelected = $(".sub-menu").has(<HTMLElement><unknown>$('.router-link-exact-active'))
          alreadySelected.css("max-height", alreadySelected.prop("scrollHeight"))
        }
      })

      sideBarMinObserver.observe(<Node>$('#sidebar').get(0), {
        attributes: true, 
        attributeFilter: ['class'],
        childList: false, 
        characterData: false
      })

      $(".menu-item").hover(function() {
        if ($("#sidebar").hasClass("min")) {
          var subMenu = $(".sub-menu", this)
          subMenu.css("max-height", subMenu.prop("scrollHeight"))
        }
      }, function() {
        if ($("#sidebar").hasClass("min")) {
          var subMenu = $(".sub-menu", this)
          subMenu.css("max-height", 0)
        }
      })
      $(".menu-item").on("click", function() {
        if (!$("#sidebar").hasClass("min")) {
          $(".sub-menu").css("max-height", 0)
          var subMenu = $(".sub-menu", this)
          subMenu.css("max-height", subMenu.prop("scrollHeight"))
        }
      })
    }
  });
</script>

<style scoped lang="scss" src="./SideBar.scss" />