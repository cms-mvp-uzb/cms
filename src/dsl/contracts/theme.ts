/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export type Theme = string

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export type ThemeRegistry = Record<Theme, string>

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export enum Themes {
  Primary = 'primary',
  Secondary = 'secondary',
  Danger = 'danger',
  Info = 'info',
  Warning = 'warning',
  Outline = 'outline'
}

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const defaultThemeRegistry: ThemeRegistry = {
  [Themes.Primary]: '--primary',
  [Themes.Danger]: '--danger',
  [Themes.Outline]: '--outline'
}

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const defaultTheme = '--primary'
