import { VueConstructor } from "vue"

import { BlockShelfItemsRegistry } from "@/constructor/src/builder"

import { htmlBoxElementConfig, HtmlBoxForm, HtmlBoxUi } from "./HtmlBox"

export enum PossibleElements {
  HtmlBox = 'htmlBox'
}

export const customBlocks: BlockShelfItemsRegistry = {
  [PossibleElements.HtmlBox]: htmlBoxElementConfig()
}

export const customForms: Record<PossibleElements, VueConstructor> = {
  [PossibleElements.HtmlBox]: HtmlBoxForm
}

export const customUis: Record<PossibleElements, VueConstructor> = {
  [PossibleElements.HtmlBox]: HtmlBoxUi
}
