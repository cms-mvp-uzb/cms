export interface PageData {
  title: string
  slug: string
  parent: string | null
  status?: PageStatus
  type: PageType | null
}

export enum PageStatus {
  New = 'new',
  Published = 'published',
  Draft = 'draft'
}

export enum PageType {
  Common = 'common',
  Product = 'product'
}

export interface PageMeta {
  title: string
  image: string
  description: string
  priority: number
}

export interface Page {
  id: string
  content: string
  meta: PageMeta
  data: PageData
  createdAt: string
  updateAt: string
}