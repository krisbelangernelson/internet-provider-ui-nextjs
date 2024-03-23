import { FOOTER } from '@/constants'
import Link from 'next/link'

// TODO: constants
export default function DesktopFooter() {
  return (
    <div className="container mx-auto mt-5">
      <div className="hidden lg:flex flex-row justify-between p-4 mx-16">
        {FOOTER.map((items, i) => (
          <div key={items[i].label} className="flex flex-col">
            {items.map((item, i) => {
              return <Link key={item.label} href={item.link}>{item.label}</Link>
            })}
          </div>
        ),
        )}
      </div>
    </div>
  )
}
