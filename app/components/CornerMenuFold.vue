<template>
  <NuxtLink
    :to="contextNavPath"
    aria-label="Menu"
    class="absolute right-0 top-0 z-40 size-[71px] cursor-pointer border-none bg-transparent p-0 touch-manipulation transition-opacity duration-150 [-webkit-tap-highlight-color:transparent] active:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[#826ec4] [clip-path:polygon(0_0,100%_0,100%_100%)]"
      aria-hidden="true"
    />

    <svg
      class="pointer-events-none absolute inset-0 z-1 size-full"
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M70.9982 71L0 0C6.67835 7.22822 10.7566 16.8847 10.7566 27.4909V60.1532H43.326C54.0152 60.1532 63.7403 64.2688 71 71H70.9982Z"
        :fill="`url(#${gradientId})`"
      />
      <defs>
        <linearGradient
          :id="gradientId"
          x1="48.0813"
          y1="23.4462"
          x2="-5.07465"
          y2="74.5839"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#826EC4" />
          <stop offset="0.13" stop-color="#7261AC" />
          <stop offset="0.42" stop-color="#5E508C" />
          <stop offset="0.84" stop-color="#2B2905" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>

    <IconMenu class="pointer-events-none absolute right-3 top-4 z-2 text-white" />
  </NuxtLink>
</template>

<script setup>
const { contextNavPath } = useNavLink('welcome')

const gradientId = `paint0_linear_corner_${useId()}`
</script>
