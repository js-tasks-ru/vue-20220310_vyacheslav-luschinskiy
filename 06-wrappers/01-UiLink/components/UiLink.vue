<template>
  <component :is="tag || 'router-link'" class="link"><slot /></component>
</template>

<script>
export default {
  name: 'UiLink',
  props: ['tag'],
};
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
