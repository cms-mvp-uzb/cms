import { ShelfItem } from "@/constructor/src/builder"

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const htmlBoxElementConfig = (): ShelfItem => ({
  icon: 'blank',
  type: 'htmlBox',
  title: 'Html Box',
  size: {
    cols: 12,
    rows: 2
  }
})
