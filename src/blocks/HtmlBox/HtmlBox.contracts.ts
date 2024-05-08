import { Element } from "@/constructor/src/builder"
import { PossibleElements } from "@/blocks"

export interface HtmlBoxProps {
  content: string
}

export type HtmlBoxElement = Element<HtmlBoxProps, PossibleElements.HtmlBox>
