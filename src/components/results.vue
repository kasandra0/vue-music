<template>
  <div class="results row">
    <div class="col">
      <h2>Results: {{results.length}}</h2>
      <div class="row">
        <!-- Results v-for -->
        <result v-for="res in results" class="col-12" :songData="res">
        </result>
      </div>
    </div>
  </div>
</template>

<script>
  import result from '@/components/result.vue'
  export default {
    name: '',
    data() {
      return {

      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    methods: {
      search() {
        this.$store.dispatch('search', this.query)
      }
    },
    components: {
      result
    }
  }

</script>

<style>
  .results {
    background: rgb(193, 183, 183)
  }
</style>