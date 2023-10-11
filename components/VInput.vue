<template>
  <div class="labelWrapper">
    <input :value="inputValue" @input="$emit('update:inputValue', $event.target.value)" :id="label" class="inputStyle"
      v-bind="$attrs" />
    <label :for="label"> {{ label }} </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string,
  inputValue: string | number | unknown
}>()

defineEmits(['update:inputValue'])
</script>