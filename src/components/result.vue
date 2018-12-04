<template>
  <div class="result">
    <h6> {{songData.trackName}} - {{songData.artistName}} </h6>
    <img :src="songData.img">
  </div>
</template>

<script>
  export default {
    name: 'result',
    props: ['songData'],
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>

</style>