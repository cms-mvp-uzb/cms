/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export interface MenuItem {
  children: MenuItem[]
  icon: string,
  label: string,
  key: string,
  route: string
}
