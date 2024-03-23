import NavMenu from '@/components/molecules/NavMenu/NavMenu'

export default function Header() {
  return (
    <header className="section-dark">
      <div className="container">
        <div className="flex flex-row">
          <div className="grow p-2">
            <NavMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
