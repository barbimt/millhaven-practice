<template>
  <NuxtLink
    :to="to"
    :aria-labelledby="`${titleId} ${descriptionId}`"
    class="relative block cursor-pointer overflow-hidden rounded-[2.5rem] border-[6px] p-8 transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2"
    :style="cardStyles"
  >
    <div
      class="pointer-events-none absolute right-0 top-0 flex size-[65.78px] items-start justify-end rounded-bl-full p-4"
      :style="{ backgroundColor: accentColor }"
      aria-hidden="true"
    >
      <svg
        width="8"
        height="15"
        viewBox="0 0 8 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0.256668 13.4028L5.85302 7.5L0.256668 1.59723C0.0915623 1.42096 -0.000709021 1.18294 4.103e-06 0.935156C0.000717227 0.68737 0.0943569 0.449947 0.260475 0.274735C0.426592 0.0995226 0.651691 0.000756494 0.886616 4.32763e-06C1.12154 -0.000747838 1.3472 0.0965751 1.51433 0.27072L7.73954 6.83674C7.90631 7.01265 8 7.25123 8 7.5C8 7.74877 7.90631 7.98735 7.73954 8.16326L1.51433 14.7293C1.3472 14.9034 1.12154 15.0007 0.886616 15C0.651691 14.9992 0.426592 14.9005 0.260475 14.7253C0.0943569 14.5501 0.000717227 14.3126 4.103e-06 14.0648C-0.000709021 13.8171 0.0915623 13.579 0.256668 13.4028Z"
          fill="#2A2B2B"
        />
      </svg>
    </div>

    <div class="flex flex-col pr-16">
      <div
        class="flex size-14 items-center justify-center rounded-2xl [&_svg]:block"
        :style="{ backgroundColor: accentColor }"
        aria-hidden="true"
        v-html="icon"
      />

      <div class="mt-6 w-fit">
        <h2
          :id="titleId"
          class="font-josefin text-[20px] font-semibold leading-5 text-[#2A2B2B]"
        >
          {{ title }}
        </h2>
        <div
          class="mt-2 h-1 w-full rounded-full"
          :style="{ backgroundColor: accentColor }"
          aria-hidden="true"
          role="presentation"
        />
      </div>

      <p
        :id="descriptionId"
        class="mt-4 max-w-[270px] font-dosis text-[16px] font-semibold leading-5 text-[#2A2B2B]"
      >
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '7A67BE',
  },
  backgroundColor: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    required: true,
  },
})

const titleId = computed(() => `card-title-${slugify(props.title)}`)
const descriptionId = computed(() => `${titleId.value}-description`)

const accentColor = computed(() => normalizeColor(props.color))

const lightBackground = computed(() => {
  if (props.backgroundColor) return props.backgroundColor
  return `color-mix(in srgb, ${accentColor.value} 12%, white)`
})

const cardStyles = computed(() => ({
  borderColor: accentColor.value,
  backgroundColor: lightBackground.value,
  outlineColor: accentColor.value,
}))
</script>
