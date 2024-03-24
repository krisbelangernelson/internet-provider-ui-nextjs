interface TestimonialsItemsProps {
  quote: string
  citation: string
}

export default function TestimonialsItems(props: TestimonialsItemsProps) {
  const { quote, citation } = props

  return (
    <div className="sm:max-w-[24rem]">
      <div className="p-3 bg-slate-50 rounded">
        <blockquote>
          <p className="font-semibold">{quote}</p>
          <cite>
            -
            {' '}
            {citation}
          </cite>
        </blockquote>
      </div>
    </div>
  )
}
