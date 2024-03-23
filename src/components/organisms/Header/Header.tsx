import { type ReactElement } from 'react'
// import Stack from 'react-bootstrap/Stack'
import NavMenu from '@/components/molecules/NavMenu/NavMenu'
// import MyAccount from '@/components/molecules/MyAccount/MyAccount'
// import Language from '@/components/molecules/Language/Language'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

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
