<template>
    <div :id="id" class="dropdown-wrapper">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Dropdown',
    props: {
        id: String
    },
    mounted() {
        const self = this;
        $('#' + this.$props.id).parent().on("click", function(event) {
            $('#' + self.$props.id).toggleClass('opened');
        })

        $(document).on("click", function(event){
            var $trigger = $('#' + self.$props.id);
            if(!$trigger.parent().has((<HTMLElement><unknown>event.target)).length){
                $trigger.removeClass('opened');
            }            
        });

    },
    methods: {
    }
  });
</script>

<style lang="scss">

    $componentName:"dropdown";

    .#{$componentName}-wrapper {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        width: 100%;

        transform: rotateX(-90deg) rotateZ(-30deg);
        transform-origin: top center;

        transition: transform 0.3s;

        &.opened {
            transform: rotateX(0deg) rotateZ(0deg);
        }

        .#{$componentName}__list {
            list-style-type: none;
            padding: 15px;
            background-color: lightseagreen;
            border-radius: 15px;
        }

        .#{$componentName}__item {
            transition: padding-left 0.3s;

            &:hover {
                padding-left: 5px;
            }

            &:not(:last-child) {
                padding-bottom: 5px;
                border-bottom: 1px solid white;
                margin-bottom: 5px;
            }

        }

        .#{$componentName}__link {
            text-decoration: none;
            color: inherit;
        }
    }

</style>

<style lang="scss">

    .dropdown__target {
        position: relative;
    }

</style>