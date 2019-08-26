<template>
  <div style="height: 100%">
  <div v-for="a in 10" :key="a" style="height: 12%">
    {{a}}
  </div>
  </div>
</template>
<script>
  export default {
    name: 'DrawNotice',
    data() {
      return {
      };
    },
    methods: {
    },
    props: []
  }
</script>
