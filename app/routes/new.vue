<template lang="html">
  <form action="" class="form">
    <label for="" class="label">Name</label>
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

  </form>
</template>

<script>
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

  },
};
</script>
