import {
  defaultTheme,
  defaultThemeRegistry,
  Theme,
  ThemeRegistry
} from '../contracts'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const resolveTheme = (
  theme: Theme,
  registry: ThemeRegistry = defaultThemeRegistry,
  defaultValue: Theme = defaultTheme
): string => {
  if (!Object.keys(registry).includes(theme)) {
    return defaultValue
  }

  return registry[theme]
}
