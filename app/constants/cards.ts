import { cardIconLightbulb, cardIconSupport } from '~/constants/card-icons'
import { LOCAL_OFFER_PATH } from '~/constants/routes'

export const welcomeCards = [
  {
    icon: cardIconLightbulb,
    title: 'Events',
    description: 'Find local events, activities and opportunities to get involved',
    color: '028090',
    to: LOCAL_OFFER_PATH,
  },
  {
    icon: cardIconSupport,
    title: 'Discounts',
    description: 'Save money with exclusive discounts and offers just for you',
    color: 'FEDE86',
    to: LOCAL_OFFER_PATH,
  },
  {
    icon: cardIconSupport,
    title: 'Mental Health Hub',
    description: 'Access mental health support and wellbeing resources',
    color: '7A67BE',
    to: LOCAL_OFFER_PATH,
  },
  {
    icon: cardIconLightbulb,
    title: 'Community',
    description: 'Connect with others, join groups and find your people',
    color: '94C9A9',
    to: LOCAL_OFFER_PATH,
  },
]
