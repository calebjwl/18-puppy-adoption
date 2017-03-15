<template lang="html">
  <div class="app">
    <div class="nav">
      <div class="nav-left">
        <router-link :to="{ name: 'index' }" class="nav-item is-brand">Puppies</router-link>
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
          <div class="column is-4">
            <nav class="panel">
              <p class="panel-heading">Adopt a Puppy</p>
              <div v-for="puppy in puppies" class="panel-block">
                <div class="media">
                  <div class="media-left">
                    <img :src="puppy.image_url" alt="" class="image is-64x64">
                  </div>
                  <div class="media-content">
                    <p class="subtitle">{{ puppy.name }}</p>
                    <th><router-link :to="{ name: 'detail', params: { id: puppy.id }}">read more</router-link></th>
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
import store from '../store';
import { findAll } from '../actions/puppy';

export default {
  data() {
    return {
      puppies: this.$select('puppies'),
    };
  },

  mounted() {
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
