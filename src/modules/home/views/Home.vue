<template>
  <Layout>
    <router-view :key="$route.fullPath" />
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue';

export default {
  name: 'Home',
  components: {
    Layout,
  },
};
</script>

<style></style>
