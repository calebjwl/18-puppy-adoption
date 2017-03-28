<template lang="html">
  <div>
    <h1 class="title">Puppies For Adoption</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="puppy in puppies">
          <th>{{ puppy.name }}</th>
          <th>{{ puppy.age }}</th>
          <th><router-link :to="{ name: 'detail', params: { id: puppy.id }}">read more</router-link></th>
        </tr>
      </tbody>
    </table>

    <h1 class="title">Adopted Puppers</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="currentPuppy.adopted()" v-for="puppy in puppies">
          <th>{{ puppy.name }}</th>
          <th>{{ puppy.age }}</th>
          <th><router-link :to="{ name: 'detail', id: puppy.id }">read more</router-link></th>
        </tr>
      </tbody>
    </table>
  </div>


</template>

<script>
import store from '../store';
import { findAll } from '../actions/puppy';

export default {
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        imageURL: '',
        description: ''
      },

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
