export const settingsConfig = {}

export enum Tab {
  General = 'general',
  Profile = 'profile',
  Layouts = 'layouts',
  Notifications = 'notifications'
}

export const tabs = {
  [Tab.General]: {
    name: Tab.General,
    title: 'General',
    isActive: true,
  },
  [Tab.Profile]: {
    name: Tab.Profile,
    title: 'Profile',
    isActive: false,
  },
  [Tab.Layouts]: {
    name: Tab.Layouts,
    title: 'Layouts',
    isActive: false,
  },
  [Tab.Notifications]: {
    name: Tab.Notifications,
    title: 'Notifications',
    isActive: false,
  }
}
