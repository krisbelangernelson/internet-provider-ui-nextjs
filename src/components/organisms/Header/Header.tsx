import NavMenu from '@/components/molecules/NavMenu/NavMenu'

export default function Header() {
  return (
    <header className="section-dark">
      <div className="flex flex-row">
        <div className="grow pt-4 lg:pt-2 p-2 min-h-20">
          <NavMenu />
        </div>
      </div>
    </header>
  )
}
