/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from 'react'
import { useModals } from './context'
import SelectOptionsModal from '../../templates/modals/select-options'

export type ModalIds = 'select-options'

const ComponentModals: Record<ModalIds, any> = {
  'select-options': SelectOptionsModal
}

const Modals = () => {
  const modalId = useModals((state) => state.modalId)
  const data = useModals((state) => state.data)

  if (!modalId) 
    return

  return createElement(ComponentModals[modalId], data)
}

export default Modals