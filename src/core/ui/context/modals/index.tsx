/* eslint-disable @typescript-eslint/no-explicit-any */
import PlaceConfigModal from '../../templates/modals/place-config'
import { createElement } from 'react'
import { useModals } from './context'

export type ModalIds = 'place-options'

const ComponentModals: Record<ModalIds, any> = {
  'place-options': PlaceConfigModal
}

const Modals = () => {
  const modalId = useModals((state) => state.modalId)
  const data = useModals((state) => state.data)

  if (!modalId) 
    return

  return createElement(ComponentModals[modalId], data)
}

export default Modals