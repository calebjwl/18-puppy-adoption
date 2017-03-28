<template lang="html">
  <div class="detail">
    <div class="container">
      <div class="nav-center">
        <h1 class="title">{{ currentPuppy.name }}</h1>
        <button v-on:click="adopt()" class="button is-info">
          <span class="fa fa-paw"></span>
          <template v-if="currentPuppy.adopted" class="button is-success">I'm Adopted!</template>
          <template v-else>Adopt Me!</template>
        </button>
      </div>

      <div class="card">
        <div class="card-image">
          <figure class="image">
              <img :src="currentPuppy.image_url" alt="" class="image is-480x480 nav-center">
          </figure>
        </div>
      </div>

      <nav class="level">
        <div class="has-text-centered">
          <div>
            <p class="heading">Age</p>
            <p class="title">{{ currentPuppy.age }}</p>
          </div>
        </div>
        <div class="level-tem has-text-centered">
          <div>
            <p class="heading">Breed</p>
            <p class="title">{{ currentPuppy.breed }}</p>
          </div>
        </div>
        <div class="level-tem has-text-centered">
          <div>
            <p class="heading">Color</p>
            <p class="title">{{ currentPuppy.color }}</p>
          </div>
        </div>
        <div class="level-tem has-text-centered">
          <div>
            <p class="heading">Sex</p>
            <p class="title">{{ currentPuppy.sex }}</p>
          </div>
        </div>
      </nav>
      <div class="content">
        <h2>About Me</h2>
        <p>{{ currentPuppy.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { findOne, toggleAdopted } from '../actions/puppy';

export default {
  data() {
    return {
      puppies: this.$select('puppies'),
      currentPuppy: null,
    };
  },

  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },

  watch: {
    puppies: 'getPuppy',
    '$route.params.id': 'getPuppy',
  },

  methods: {
    getPuppy() {
      this.currentPuppy = this.puppies.find(puppy => puppy.id == this.$route.params.id);
    },

    adopt() {
      store.dispatch(toggleAdopted(this.currentPuppy));
    }
  },
};
</script>
