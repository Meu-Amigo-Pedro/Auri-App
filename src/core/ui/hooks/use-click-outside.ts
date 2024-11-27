/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useEffect } from 'react'

export function useClickOutside (ref: RefObject<any>, fnAfterClick: () => void, excludedElementsIds?: string[], ...someStates: any[]) {
  useEffect(() => {
    const handleClickOut = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target)) return

      const elementId = (event as any).toElement.id

      if ((excludedElementsIds ?? []).includes(elementId)) return

      fnAfterClick()
    }

    document.addEventListener('mousedown', handleClickOut)

    return () => {
      document.removeEventListener('mousedown', handleClickOut)
    }
  }, [ref, fnAfterClick, excludedElementsIds, ...someStates])
}
