<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 20.5C12 20.5 4 15.5 4 9.5C4 7.5 5.5 6 7.5 6C9 6 10.5 7 12 8.5C13.5 7 15 6 16.5 6C18.5 6 20 7.5 20 9.5C20 15.5 12 20.5 12 20.5Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 24 },
})
</script>
