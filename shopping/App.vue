<template>
    <Navbar />

    <router-view />

</template>

<script>
import Navbar from './navbar.vue';

export default {
    components: { Navbar }
}
</script>

<style scoped>


</style>
