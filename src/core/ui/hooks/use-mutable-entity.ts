/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useRef } from 'react'

const useMutableEntity = <T,>(initial: T): T => {
  const [, setTrigger] = useState(Math.random())

  const arrayProxy = useCallback((array: any[], callback: (obj: object) => void) => {
    return new Proxy(array, {
      get (arr, prop) {
        if (['push', 'pop', 'shift', 'unshift', 'splice'].includes(prop as string)) {
          // @ts-expect-error
          return (...args) => {
            // @ts-expect-error
            const result = Array.prototype[prop].apply(arr, args)

            callback(arr)

            return result
          }
        }

        // @ts-expect-error
        return arr[prop]
      },

      set (arr, prop, value) {
        // @ts-expect-error
        arr[prop] = value

        callback(arr)

        return true
      }
    })
  }, [])

  const deepProxy = useCallback(<T,>(target: T, callback: (obj: object) => void): object => {
    return new Proxy(target as object, {
      get (obj, prop) {
        // @ts-expect-error
        const value = obj[prop]

        if (Array.isArray(value)) {
          return arrayProxy(value, callback)
        } else if (typeof value === 'object' && value !== null) {
          return deepProxy(value, callback)
        } else {
          return value
        }
      },
      set (obj, prop, value) {
        // @ts-expect-error
        obj[prop] = value

        callback(obj)

        return true
      }
    })
  }, [])

  const state = useRef(deepProxy(initial, () => {
    setTrigger(Math.random())
  }))

  return state.current as T
}

export default useMutableEntity