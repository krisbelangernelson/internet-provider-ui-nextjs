import FooterAccordian from '@/components/atoms/Accordian/FooterAccordian'
import { FOOTER } from '@/constants'

// TODO: constants
export default function MobileFooter() {
  return (
    <div className="container mx-auto mt-5">
      <div className="lg:hidden flex flex-col lg:flex-row justify-between p-4 space-y-3">
        {FOOTER.map((items, i) => <FooterAccordian key={items[i].label} items={items} />,
        )}
      </div>
    </div>
  )
}
