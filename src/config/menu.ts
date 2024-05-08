/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const menu = [
  {
    label: 'Dashboard', // Key to translate from i18n.
    key: 'dashboard', // Key to identify as a unique entry.
    icon: 'dashboard', // Can be of type `undefined`.
    route: 'dashboard.dashboard', // The route where current item should lead.
    children: []
  },
  {
    label: 'Pages',
    key: 'pages',
    icon: 'pages',
    route: 'content.pages',
    children: []
  },
  {
    label: 'Analytics',
    key: 'analytics',
    icon: 'analytics',
    route: 'analytics.analytics',
    children: []
  },
  {
    label: 'E-Commerce',
    key: 'products',
    icon: 'products',
    route: 'ecommerce.ecommerce',
    children: []
  },
  {
    label: 'Integrations',
    key: 'integrations',
    icon: 'cube3D',
    route: 'integrations.integrations',
    children: []
  },
  {
    label: 'Settings',
    key: 'settings',
    icon: 'settings',
    route: 'settings.settings',
    children: []
  },
]
