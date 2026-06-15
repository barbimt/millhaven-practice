<template>
  <nav :class="navClass" aria-label="Main navigation">
    <ul :class="['m-0 flex list-none items-center p-0', listClass]">
      <li v-for="link in links" :key="link.label">
        <NuxtLink
          :to="contextNavPath"
          :aria-label="link.label"
          :aria-current="link.currentPath ? currentPage(link.currentPath) : undefined"
          :class="[navIconClass, navFocusClass]"
        >
          <component :is="iconComponents[link.icon]" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import IconHeart from '~/components/icons/IconHeart.vue'
import IconHome from '~/components/icons/IconHome.vue'
import IconMenu from '~/components/icons/IconMenu.vue'
import IconSearch from '~/components/icons/IconSearch.vue'

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
  variant: {
    type: String,
    default: 'welcome',
  },
  navClass: {
    type: String,
    default: '',
  },
  listClass: {
    type: String,
    default: 'gap-[24px]',
  },
})

const iconComponents = {
  IconHome,
  IconHeart,
  IconSearch,
  IconMenu,
}

const { contextNavPath, currentPage, navIconClass, navFocusClass } = useNavLink(props.variant)
</script>
