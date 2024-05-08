export enum Size {
  Small = 'small',
  Default = 'default',
  Large = 'large'
}

export const sizesRegistry: Record<Size, string> = {
  [Size.Small]: '--small',
  [Size.Default]: '',
  [Size.Large]: '--large'
}

export const defaultSize = sizesRegistry[Size.Default]
