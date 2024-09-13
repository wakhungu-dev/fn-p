'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Logo() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/')}>
      lynrose
    </button>
  )
}