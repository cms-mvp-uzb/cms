/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const menu = [
  {
    label: 'Главная панель', // Key to translate from i18n.
    key: 'dashboard', // Key to identify as a unique entry.
    icon: 'dashboard', // Can be of type `undefined`.
    route: 'dashboard.dashboard', // The route where current item should lead.
    children: []
  },
  {
    label: 'Страницы',
    key: 'pages',
    icon: 'pages',
    route: 'content.pages',
    children: []
  },
  {
    label: 'Аналитика',
    key: 'analytics',
    icon: 'analytics',
    route: 'analytics.analytics',
    children: []
  },
  {
    label: 'Магазин',
    key: 'products',
    icon: 'products',
    route: 'ecommerce.ecommerce',
    children: []
  },
  {
    label: 'Интеграции',
    key: 'integrations',
    icon: 'cube3D',
    route: 'integrations.integrations',
    children: []
  },
  {
    label: 'Настройки',
    key: 'settings',
    icon: 'settings',
    route: 'settings.settings',
    children: []
  },
]
