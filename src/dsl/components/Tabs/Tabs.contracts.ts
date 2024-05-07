
export interface TabProps {
  isActive: boolean
  name: string
  title: string
}

export type Tabs = Record<string, TabProps>
