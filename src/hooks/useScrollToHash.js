import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])
}
