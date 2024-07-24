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
    title: "Общие",
    isActive: true,
  },
  [Tab.Profile]: {
    name: Tab.Profile,
    title: "Профиль пользователя",
    isActive: false,
  },
  [Tab.Layouts]: {
    name: Tab.Layouts,
    title: "Сетки",
    isActive: false,
  },
  [Tab.Notifications]: {
    name: Tab.Notifications,
    title: 'Уведомления',
    isActive: false,
  }
}
