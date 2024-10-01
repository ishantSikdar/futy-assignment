import GamesOfDay from "./GamesOfDay";
import { CoinIcon, FootballIcon, GamepadIcon, UserIcon } from "../utils/IconRegistry";
import MenuItem from "./MenuItem";
import GameTabOptions from "./GameTabOptions";
import MobileHeader from "./MobileHeader";
import { useEffect, useRef, useState } from "react";
import gamesSchedule from "../utils/schedule.json";

export default function AppWindow() {
  const gamesWindow = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef<number>(0); 
  const [isFocused, setIsFocused] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollY = gamesWindow.current?.scrollTop || 0; 

    // Determine scroll direction
    if (currentScrollY > lastScrollRef.current) {
      setIsFocused(false); // Hide the opaque div

    } else {
      setIsFocused(true); // Show the opaque div
    }

    lastScrollRef.current = currentScrollY;
  };


  useEffect(() => {
    const currentGamesWindow = gamesWindow.current;

    if (currentGamesWindow) {
      currentGamesWindow.addEventListener("scroll", handleScroll); // Add scroll event listener

      // Clean up the event listener on component unmount
      return () => {
        currentGamesWindow.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Run effect only once on mount

  return (
    <div className="h-[100dvh] w-full">
      <MobileHeader isActive={isFocused} />

      {/* main */}
      <div className={`${isFocused ? 'h-[92%]' : 'h-[100%]'} md:h-full flex flex-col`}>
        <GameTabOptions isFocused={isFocused} />

        {/* games  */}
        <div ref={gamesWindow} className="flex-grow overflow-y-scroll pb-20 flex flex-col gap-4">
          {gamesSchedule.map(({ date, games }) => <GamesOfDay key={date} games={games} date={new Date(date)} />)}
        </div>
      </div>

      <div className={`${isFocused ? 'opacity-100' : 'opacity-0'} duration-300 transition-opacity ease-in-out md:hidden fixed h-20 bg-black bottom-0 mt-2 flex w-full justify-end py-3 gap-6 text-[#858585] shadow-[0_20px_100px_105px_rgba(0,0,0,1)]`}>
        <div className="flex justify-evenly w-full items-center">
          <MenuItem text="Profile" Icon={<UserIcon color="#292929" width={30} height={30} />} />
          <MenuItem isActive={true} className="relative -top-4" text="Games" Icon={<GamepadIcon color="#ffffff" width={60} height={60} />} />
          <MenuItem text="Watch" Icon={<FootballIcon color="#292929" width={30} height={30} />} />
          <MenuItem text="Coins" Icon={<CoinIcon color="#292929" width={30} height={30} />} />
        </div>
      </div>
    </div>
  );
}
