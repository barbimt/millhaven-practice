<template>
  <section
    class="mx-auto w-full max-w-mobile"
    aria-labelledby="local-offer-heading"
  >
    <header class="flex flex-col items-center text-center">
      <div
        class="flex size-14 items-center justify-center rounded-2xl bg-[#7A67BE] [&_svg]:block"
        aria-hidden="true"
        v-html="cardIconSupport"
      />

      <h1
        id="local-offer-heading"
        class="mt-4 font-josefin text-[20px] font-semibold leading-5 text-[#2A2B2B]"
      >
        Your Local Offer
      </h1>

      <div
        class="mt-2 h-1 w-[140px] rounded-full bg-[#7A67BE]"
        aria-hidden="true"
        role="presentation"
      />
    </header>

    <ul
      class="mt-8 grid list-none grid-cols-2 justify-items-center gap-4 p-0"
      aria-label="Local offer categories"
    >
      <li v-for="category in localOfferCategories" :key="category.title">
        <CategoryCard
          :title="category.title"
          :color="category.color"
          :image="category.image"
          :to="category.to"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { cardIconSupport } from '~/constants/card-icons'
import { localOfferCategories } from '~/constants/local-offer-categories'

definePageMeta({
  layout: 'app',
})

useSeoMeta({
  title: 'Your Local Offer',
})
</script>
