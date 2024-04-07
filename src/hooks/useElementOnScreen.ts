import { RefObject, useEffect, useState } from 'react'

export function useElementOnScreen(
  ref: RefObject<Element>,
  oneTime = true,
  rootMargin = '0px',
) {
  const [isIntersecting, setIsIntersecting] = useState(true)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (oneTime) {
          if (entry.isIntersecting && ref.current) {
            // Use .active className for transtions styles
            ref.current.classList.add('active')
            observer.unobserve(ref.current)
          }
        } else {
          setIsIntersecting(entry.isIntersecting)
        }
      },
      { rootMargin },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  // Use return boolean to transition or animate for in-view element
  /* eg:
    style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? 'none' : '0 2rem',
        transition: '600ms ease-in-out',
      }}
  */

  return isIntersecting
}
