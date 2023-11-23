<template>
    <div class="allContent" >
        <MainHeader />
        <slot />
    </div>
</template>

<script setup>

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.allContent {
    max-width: 1200px;
    padding: 1rem 0.5rem;
    margin: auto;
}

</style>