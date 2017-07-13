<template lang="html">
  <form class="form" v-on:submit.prevent="save">
    <label class="label">Name</label>
    <p class="control">
      <input v-model="formValues.name" type="text" class="input">
    </p>

    <label for="" class="label">Age</label>
    <p class="control">
      <input v-model="formValues.age" type="text" class="input">
    </p>

    <label for="" class="label">Sex</label>
    <p class="select" v-model="formValues.sex">
      <select>
        <option value="">Select an option</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </p>

    <label for="" class="label">Color</label>
    <p class="control">
      <input v-model="formValues.color" type="text" class="input">
    </p>

    <label for="" class="label">Breed</label>
    <p class="control">
      <input v-model="formValues.breed" type="text" class="input">
    </p>

    <label for="" class="label">Image URL</label>
    <p class="control">
      <input v-model="formValues.image_url"  type="url" class="input">
    </p>

    <label for="" class="label">Description</label>
    <p class="control">
      <textarea v-model="formValues.description" cols="30" rows="10" class="textarea"></textarea>
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
        image_url: '',
        description: ''
      }
    };
  },

  methods: {
    save() {
      store.dispatch(create(this.formValues)).then(() => {
        this.$router.push({ name: 'index' });
      });
    },
  },
};
</script>
