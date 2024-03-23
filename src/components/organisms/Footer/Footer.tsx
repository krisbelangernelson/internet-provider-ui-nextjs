import Copyright from './Copyright'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

export default function Footer() {
  return (
    <footer className="mt-auto section-dark">
      <DesktopFooter />
      <MobileFooter />
      <Copyright />
    </footer>
  )
}
