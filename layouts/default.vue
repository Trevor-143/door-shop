<template>
    <div class="allContent" >
        <MainHeader />
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>

.allContent {
    max-width: 1000px;
    padding: 1rem 0.5rem;
    margin: auto;
}

</style>