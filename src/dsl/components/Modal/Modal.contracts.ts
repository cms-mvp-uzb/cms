export enum ModalSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Full = 'full'
}

export const modalSizeClassRegistry: Record<ModalSize, string> = {
  [ModalSize.Small]: '',
  [ModalSize.Medium]: '--medium',
  [ModalSize.Large]: '--large',
  [ModalSize.Full]: '--full'

}