<template lang="html">
  <div class="app">
    <div class="nav">
      <div class="nav-left">
        <p :to="{ name: 'index' }" class="nav-item is-brand">Puppies</p>
      </div>
      <div class="nav-right nav-menu">
        <a href="" class="nav-item"></a>
        <router-link :to="{ name: 'index' }" class="nav-item">All Puppies</router-link>
        <router-link :to="{ name: 'new' }" class="nav-item">Add Puppy</router-link>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="sidebar column is-4">
            <nav class="panel">
              <p class="panel-heading">Adopt a Puppy</p>
              <div class="panel-block">
                <div class="media">
                  <div class="media-left">
                    <img src="http://fillmurray.com/300/300" alt="" class="image is-64x64">
                  </div>
                  <div class="media-content">
                    <p class="subtitle">Bill Dog</p>
                    <!-- link to the `detail` route passing the parameter for the `id` of the current puppy -->
                    <router-link :to="{ name: 'detail' }">Read More</router-link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div class="column is-8">
            <router-view></router-view>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
