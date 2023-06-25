/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const menu = [
  {
    label: 'dashboard', // Key to translate from i18n.
    key: 'dashboard', // Key to identify as a unique entry.
    icon: 'dashboard', // Can be of type `undefined`.
    route: 'dashboard.dashboard', // The route where current item should lead.
    children: []
  },
  {
    label: 'pages',
    key: 'pages',
    icon: 'cards',
    route: 'content.pages',
    children: []
  },
  {
    label: 'database',
    key: 'database',
    icon: 'database',
    route: 'database',
    children: []
  },
]
