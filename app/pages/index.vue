<script setup>
import { welcomeCards } from '~/constants/cards'

definePageMeta({
  layout: 'welcome',
})
</script>

<template>
  <div class="w-full pt-6 text-center">
    <p class="font-dosis text-[30px] font-semibold leading-[38px] text-[#2A2B2B]">Welcome to</p>
    <h1
      class="bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(90deg,#826EC4_0%,#94C9A9_50%,#028A9C_100%)] bg-clip-text font-josefin text-[40px] font-semibold leading-[40px] text-transparent"
    >
      App Name
    </h1>
    <p class="mx-auto mt-2 max-w-[350px] text-center font-dosis text-[16px] font-semibold leading-5 text-[#2A2B2B]">
      Here to help you navigate what's next
    </p>

    <ul
      class="mx-auto mt-8 flex max-w-mobile list-none flex-col gap-[30px] p-0 text-left"
      aria-label="Available sections"
    >
      <li v-for="card in welcomeCards" :key="card.title">
        <Card
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
          :color="card.color"
          :to="card.to"
        />
      </li>
    </ul>
  </div>
</template>
