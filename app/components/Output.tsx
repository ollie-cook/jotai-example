'use client'

import { inconsolata }  from '@/app/fonts'
import { useStore, useAtomValue } from 'jotai'
import { bgColourAtom } from "@/app/store/atoms";

export default function Output() {
  const bgColour = useAtomValue(bgColourAtom, {
    store: useStore(),
  });
  

  return (
    <div 
      className="relative w-5/6 aspect-square bg-red-300 rounded-md md:w-[32rem]"
      style={{backgroundColor: bgColour}}
    >
      <p className={`absolute bottom-1 left-2 ${inconsolata.className}`}>Client Component</p>
    </div>
  )
}