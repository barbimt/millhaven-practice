<template>
  <header
    class="flex items-center justify-between bg-[linear-gradient(90deg,#308896_0%,#7A66B3_100%)] px-6 py-4"
  >
    <NuxtLink
      :to="contextNavPath"
      aria-label="Return to home"
      :class="[navIconClass, navFocusClass]"
      class="text-white"
    >
      <IconBack />
    </NuxtLink>

    <HeaderNavLinks
      :links="appNavLinks"
      variant="app"
      nav-class="text-white"
    />
  </header>
</template>

<script setup>
import { appNavLinks } from '~/constants/nav-links'

const { contextNavPath, navIconClass, navFocusClass } = useNavLink('app')
</script>
