<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    :aria-hidden="decorative ? 'true' : undefined"
    :aria-label="decorative ? undefined : label"
    :role="decorative ? undefined : 'img'"
  >
    <path :d="path" />
  </svg>
</template>

<script setup>
const props = defineProps({
  width: {
    type: [String, Number],
    required: true,
  },
  height: {
    type: [String, Number],
    required: true,
  },
  viewBox: {
    type: String,
    required: true,
  },
  fill: {
    type: String,
    default: 'none',
  },
  path: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  decorative: {
    type: Boolean,
    default: true,
  },
})

if (import.meta.dev && !props.decorative && !props.label) {
  console.warn('[Icon] Provide a `label` when `decorative` is false.')
}
</script>
