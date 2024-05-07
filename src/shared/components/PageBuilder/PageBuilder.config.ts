import { Tabs } from "@/dsl/components/Tabs";

export const pageBuilderConfig = {}

export enum Tab {
  General = 'general',
  Settings = 'settings'
}
export const tabs = {
  [Tab.General]: {
    name: Tab.General,
    title: 'Component',
    isActive: true,
  },
  [Tab.Settings]: {
    name: Tab.Settings,
    title: 'Page Settings',
    isActive: false,
  }
}
