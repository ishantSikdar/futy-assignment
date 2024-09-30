import AppWindow from "./components/AppWindow"
import DesktopMenu from "./components/DesktopMenu"

function App() {
  return <div className="flex h-[100dvh] w-full font-poppins bg-black">
    <div className="hidden md:block md:w-24">
      <DesktopMenu />
    </div>
    <div className="w-full">
      <AppWindow />
    </div>
  </div>
}

export default App
