<template>
  <header class="relative h-[71px] bg-white">
    <HeaderNavLinks
      :links="welcomeNavLinks"
      variant="welcome"
      nav-class="relative z-10 flex h-full items-center justify-end px-6 pr-[82px] text-brand-purple"
    />

    <CornerMenuFold />
  </header>
</template>

<script setup>
import { welcomeNavLinks } from '~/constants/nav-links'
</script>
