import { HOME_PATH, LOCAL_OFFER_PATH } from '~/constants/routes'

export type NavLinkVariant = 'app' | 'welcome'

const navIconClass =
  'inline-flex items-center justify-center cursor-pointer transition-opacity duration-150 touch-manipulation active:opacity-70 [-webkit-tap-highlight-color:transparent]'

const navFocusClasses: Record<NavLinkVariant, string> = {
  app: 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  welcome:
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple',
}

export const useNavLink = (variant: NavLinkVariant = 'welcome') => {
  const route = useRoute()

  const contextNavPath = computed(() =>
    route.path === HOME_PATH ? LOCAL_OFFER_PATH : HOME_PATH,
  )

  const currentPage = (path: string) => (route.path === path ? 'page' : undefined)

  const navFocusClass = navFocusClasses[variant]

  return {
    contextNavPath,
    currentPage,
    navIconClass,
    navFocusClass,
  }
}
