import { HOME_PATH } from '~/constants/routes'

export type LocalOfferCategory = {
  title: string
  color: string
  image?: string
  to: string
}

const category = (
  title: string,
  color: string,
  image?: string,
): LocalOfferCategory => ({
  title,
  color,
  image,
  to: HOME_PATH,
})

export const localOfferCategories: LocalOfferCategory[] = [
  category(
    'Independent Living',
    'C1666B',
    '/images/gorgeous-fair-haired-lady-having-fun-couch-attractive-european-woman-white-dress-posing-red-sofa 1.png',
  ),
  category(
    'Health and Wellbeing',
    '028090',
    '/images/man-athlete-drinking-water-out-plastic-bottle-after-hard-running-workout-dark-skinned-male-sportsman-looking-sky-while-running-enjoying-view 1.png',
  ),
  category('Housing', 'FEDE86', '/images/housing 1.png'),
  category('Finances', '7A67BE', '/images/finances 1.png'),
  category('Immigration', '94C9A9', '/images/Ellipse 8-1.png'),
  category('Education, Employment and Training', 'C1666B', '/images/Ellipse 8.png'),
  category('Custody', '028090'),
  category('Care Leavers who are Parents', 'FEDE86'),
  category('Entitlements', '7A67BE'),
  category('Have Your Say', '94C9A9'),
]
