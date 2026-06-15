<template>
  <NuxtLink
    :to="to"
    :aria-labelledby="`${titleId} ${actionId}`"
    class="box-border flex size-[165px] cursor-pointer flex-col items-center rounded-[20px] border-[5px] px-[3.03%] pb-[9.7%] pt-3 transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2"
    :style="cardStyle"
  >
    <div class="size-[88px] shrink-0 overflow-hidden rounded-full bg-white/70">
      <NuxtImg
        v-if="image"
        :src="image"
        :alt="resolvedImageAlt"
        quality="90"
        class="size-full object-cover"
      />
      <div
        v-else
        class="flex size-full items-center justify-center"
        aria-hidden="true"
      >
        <span class="font-dosis text-xs text-[#2A2B2B]/50">Image</span>
      </div>
    </div>

    <h2
      :id="titleId"
      class="mt-1 flex w-full flex-1 items-center justify-center text-center font-josefin text-[14px] font-semibold leading-[14px] text-black"
    >
      {{ title }}
    </h2>

    <span
      :id="actionId"
      class="sr-only"
    >
      {{ actionLabel }}
    </span>
  </NuxtLink>
</template>

<script setup>
import { HOME_PATH } from '~/constants/routes'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'C1666B',
  },
  image: {
    type: String,
    default: '',
  },
  imageAlt: {
    type: String,
    default: '',
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

const instanceId = useId()
const titleId = `${instanceId}-title`
const actionId = `${instanceId}-action`

const resolvedImageAlt = computed(() => {
  if (!props.image) return ''
  return props.imageAlt || `${props.title} category illustration`
})

const actionLabel = computed(() =>
  props.to === HOME_PATH ? 'Return to home' : 'View category',
)

const accentColor = computed(() => normalizeColor(props.color, '#C1666B'))

const cardStyle = computed(() => ({
  borderColor: accentColor.value,
  backgroundColor: props.backgroundColor || `color-mix(in srgb, ${accentColor.value} 12%, white)`,
  outlineColor: accentColor.value,
}))
</script>
