<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Welcome to Vue-Music</h1>
      </div>
      <div class="col-12">
        <p>Searching for: {{query}}</p>
        <form @submit.prevent="search">
          <input type="text" placeholder="Search" v-model='query'>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <results>

        </results>
      </div>
    </div>
  </div>
</template>

<script>
  import results from '@/components/results.vue'
  export default {
    name: 'home',
    data() {
      return {
        query: ''
      }
    },
    components: {
      results
    },
    computed: {},
    methods: {
      search() {
        this.$store.dispatch('search', this.query)
      }
    }
  }

</script>

<style>


</style>