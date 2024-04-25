import { Container } from 'inversify'

import { IModule } from '@/toolkit/src/core/general'
import {IModal, ModalServiceType} from "@/toolkit/src/core/services/modal"

import { routes, modals } from './config'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const ContentModule: IModule = {
  name: 'content',
  providers: bind => ({

  }),
  onload (container: Container): void {
    const modalService = container.get<IModal>(ModalServiceType)
    modalService.registerAll(modals)
  },
  routes
}
