/* eslint-disable react-hooks/exhaustive-deps */
import { iocContainer } from '@/core/ioc'
import { useMemo } from 'react'

export const useDeps = <DepType>(depName: string): DepType => {
  return useMemo(() => iocContainer.get<DepType>(depName), [])
}