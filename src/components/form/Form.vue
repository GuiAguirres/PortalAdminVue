<template>
    <div class="form">
        <slot></slot>
    </div>
</template>

<script lang="ts">

import AppTextField from './AppTextField.vue'

export { AppTextField }

</script>

<style lang="scss">
    .form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        & > .form__field {
            width: 50%;
        }

        & > form__button {
            align-self: flex-end;
        }
    }
</style>