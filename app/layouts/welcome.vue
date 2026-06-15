<template>
  <div class="flex min-h-dvh flex-col bg-white">
    <WelcomeHeader />

    <main class="flex flex-1 flex-col px-6 pb-6">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
