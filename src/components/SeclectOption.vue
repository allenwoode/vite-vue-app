<template>
  <div class="p-6 max-w-sm mx-auto space-x-2">

  
  <label :for="name">{{ name }}</label>
  <select v-model="selectedOption" class="w-60 h-55">
    <template v-for="option in options" :key="option.value">
      <option :value="option.value">{{ option.text }}</option>
    </template>
  </select>
  <label>{{ selectedOption }}</label>

</div>
</template>

<script>
  export default {

    props: {
      options: {
        type: Array,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    model: {
      prop: 'selectedOption',
      event: 'change',
    }
  }
</script>