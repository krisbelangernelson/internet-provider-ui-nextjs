'use client'
import { useState } from 'react'
import CaretIcon from '../CaretIcon/CaretIcon'
import Link from 'next/link'

interface AccordionProps {
  items: {
    label: string
    link: string
  }[]
}

export default function FooterAccordian(props: AccordionProps) {
  const { items } = props
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full">
      <input
        id="expandCollapse"
        checked={open}
        type="checkbox"
        className="peer sr-only"
        onChange={() => { }}
      />
      <label
        htmlFor="expandCollapse"
        className="w-full flex justify-center items-center hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out cursor-pointer text-white"
        onClick={() => setOpen(!open)}
      >
        {items[0].label}
        <CaretIcon
          height={20}
          width={20}
          className={`ml-4 fill-white ${open && 'rotate-180'}`}
        />
      </label>
      <div
        className="overflow-hidden h-0 peer-checked:h-20 peer-checked:overflow-scroll transition-[height] duration-500 ease-in-out"
      >
        <div className="flex flex-col">
          {items.map((item, i) => {
            if (i > 0) {
              return <Link key={item.label} href={item.link}>{item.label}</Link>
            }
          })}
        </div>
      </div>
    </div>
  )
}
