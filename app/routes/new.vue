<template lang="html">
  <form class="form" v-on:submit.prevent="save(formData)">
    <label class="label">Name</label>
    <p class="control">
      <input type="text" class="input">
    </p>

    <label for="" class="label">Age</label>
    <p class="control">
      <input type="text" class="input">
    </p>

    <label for="" class="label">Sex</label>
    <p class="select">
      <select>
        <option value="">Select an option</option>
        <option value="">Male</option>
        <option value="">Female</option>
      </select>
    </p>

    <label for="" class="label">Color</label>
    <p class="control">
      <input type="text" class="input">
    </p>

    <label for="" class="label">Breed</label>
    <p class="control">
      <input type="text" class="input">
    </p>

    <label for="" class="label">Image URL</label>
    <p class="control">
      <input type="url" class="input">
    </p>

    <label for="" class="label">Description</label>
    <p class="control">
      <textarea cols="30" rows="10" class="textarea"></textarea>
    </p>

    <button class="button">Back</button>
    <button class="button is-info">Submit</button>
  </form>
</template>

<script>
import { create } from '../actions/puppy';
import store from '../store';

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
      }
    };
  },

  methods: {
    save(data) {
      store.dispatch(create(data._id, data)).then(() => {
        this.$router.push({ name: 'index' });
      });
    },
  },
};
</script>
