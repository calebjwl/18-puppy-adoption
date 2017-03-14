<template lang="html">
  <div class="detail">
    <div class="container">
      <div class="nav-center">
        <h1 class="title">Luna</h1>
        <button class="button is-success"><span class="fa fa-paw"></span>I'm Adopted!</button>
      </div>

      <img :src="currentPuppy.imageURL" alt="" class="image is-480x480 nav-center">

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
import { findOne } from '../actions/puppy';

export default {
  data() {
    return {
      puppies: this.$select('puppies'),
      currentPuppy: {}
    };
  },

  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },

  watch: {
    puppy: 'getPuppy'
  },

  methods: {
    getPuppy() {
      this.currentPuppy = this.puppies.find(puppy => puppy.id == this.$route.params.id);
    }
  },
};
</script>
