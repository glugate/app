<template>
    <input
        :value="modelValue"
        @input="onInput"
        @change="onChange"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
</template>
<script setup lang="ts">
import {computed, defineProps, ref, watch} from "vue";

// Props
const props = defineProps<{
  name: String,
  modelValue: Number | String,
  lazy?: {
    type: Boolean,
    default: false,
  }
}>()

// Emit
const emit = defineEmits(['update:modelValue'])

// Data
const newValue = ref('');

// Watch
watch(newValue, (newQuestion, oldQuestion) => {
  console.log("newValue change: ", newQuestion, oldQuestion)
})

// Methods
function onInput(event: any) {
  console.log("onInput", event.target.value)
  if (!props.lazy) {
    const value = event.target.value
    updateValue(value)
  }
}
function onChange(event: any) {
  console.log("onChange", event.target.value)
  if (props.lazy) {
    const value = event.target.value
    updateValue(value)
  }
}
function updateValue(value: any) {
  newValue.value = value
  emit("update:modelValue", value)
}


</script>