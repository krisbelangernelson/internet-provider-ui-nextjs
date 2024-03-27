import { FOOTER } from '@/constants'
import Link from 'next/link'

// TODO: constants
export default function DesktopFooter() {
  return (
    <div className="container mx-auto mt-5">
      <div className="hidden lg:flex flex-row justify-between p-4 mx-16">
        {FOOTER.map((items, i) => (
          <div key={items[i].label} className="flex flex-col">
            {items.map((item, j) => {
              if (j === 0) {
                return <div key={item.label} className="text-white text-xl mb-2">{item.label}</div>
              }
              return <Link key={item.label} href={item.link}>{item.label}</Link>
            })}
          </div>
        ),
        )}
      </div>
    </div>
  )
}
