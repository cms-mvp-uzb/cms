import { CreatePageModal } from "../components/CreatePageModal"

export enum Modal {
  CreatePage = 'createPage'
}

export const modals = {
  [Modal.CreatePage]: CreatePageModal
}
