export type NavLinkIcon = 'IconHome' | 'IconHeart' | 'IconSearch' | 'IconMenu'

export type NavLinkItem = {
  label: string
  icon: NavLinkIcon
  currentPath?: string
}

export const welcomeNavLinks: NavLinkItem[] = [
  { label: 'Home', icon: 'IconHome', currentPath: '/' },
  { label: 'Favorites', icon: 'IconHeart' },
  { label: 'Search', icon: 'IconSearch' },
]

export const appNavLinks: NavLinkItem[] = [
  ...welcomeNavLinks,
  { label: 'Menu', icon: 'IconMenu' },
]
