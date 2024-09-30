import GamesOfDay from "./GamesOfDay";
import { BurgerIcon, CoinIcon, FootballIcon, GamepadIcon, SearchIcon, UserIcon } from "../utils/IconRegistry";
import MenuItem from "./MenuItem";
import GameTabOptions from "./GameTabOptions";

export default function AppWindow() {
  return <div className="h-screen w-full ">
    <div className="md:hidden h-[10%] w-full bg-black border-b flex justify-between items-center px-7">
      <div className="flex gap-4 items-center">
        <UserIcon color="white" height={40} width={40} />
        <div className="text-orange border-2 border-orange flex items-center h-max gap-2 px-2 py-1 rounded-full">
          <CoinIcon color="#F15206" height={25} width={25} />
          <p className="font-semibold">50</p>
        </div>
      </div>

      <div className="">
        <div className="flex z-50 items-center">
          <SearchIcon height={40} width={40} />
          <BurgerIcon color="white" height={40} width={40} />
        </div>
      </div>
    </div>

    {/* main */}
    <div className="h-[90%] md:h-full flex flex-col">
      <GameTabOptions />

      {/* games  */}
      <div className="flex-grow overflow-y-scroll flex flex-col gap-4 pb-32">
        <GamesOfDay />
        <GamesOfDay />
        <GamesOfDay />
      </div>
    </div>

    <div className="md:hidden fixed h-20 bg-black bottom-0 mt-2 flex w-full justify-end py-3 gap-6 text-[#858585] shadow-[0_20px_100px_105px_rgba(0,0,0,1)]">
      <div className="flex justify-evenly w-full items-center">
        <MenuItem text="Profile" Icon={<UserIcon color="#292929" width={30} height={30} />} />
        <MenuItem isActive={true} className="relative -top-4" text="Games" Icon={<GamepadIcon color="#ffffff" width={60} height={60} />} />
        <MenuItem text="Watch" Icon={<FootballIcon color="#292929" width={30} height={30} />} />
        <MenuItem text="Coins" Icon={<CoinIcon color="#292929" width={30} height={30} />} />
      </div>
    </div>

  </div>
}