<template>
  <div class="flex min-h-dvh flex-col bg-white">
    <AppHeader />

    <main
      id="main-content"
      tabindex="-1"
      class="flex flex-1 flex-col px-6 py-6"
    >
      <slot />
    </main>
  </div>
</template>
