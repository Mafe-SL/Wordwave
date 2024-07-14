import { Footer } from "./footer"
import Navbar from "./Navbar"

type Props = {
  children: React.ReactNode
}

const MarketingLayout = ({children}: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="">
      {children}
      </main>
      <Footer />
    </div>
  )
}

export default MarketingLayout
