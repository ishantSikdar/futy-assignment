import { useEffect, useRef, useState } from "react";
import { BurgerIcon, CoinIcon, SearchIcon, UserIcon } from "../utils/IconRegistry";

export default function MobileHeader({ isActive }: { isActive: boolean }) {
  const searchRef = useRef<HTMLInputElement>(null);
  const [useSearch, setUseSearch] = useState<boolean>(false);
  const [iconPosition, setIconPosition] = useState<string>('right-10');

  const toggleSearch = () => {
    setUseSearch((prev) => !prev);

    // Reset the icon position to `right-10` when toggling off the search
    if (useSearch) {
      setTimeout(() => {
        setIconPosition('right-10');
      }, 300);

    } else {
      // After 300ms, change the icon position to `right-0`
      setTimeout(() => {
        setIconPosition('-right-2');
      }, 300);
    }
  };

  useEffect(() => {
    if (useSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [useSearch]);

  return <header className={`${isActive ? ' h-[8%]': 'h-0 opacity-0'} transition-all duration-300 ease-in-out md:hidden w-full bg-black border-b flex justify-between items-center px-5`}>
    {!useSearch && <div className="flex gap-4 items-center">
      <UserIcon color="white" height={40} width={40} />
      <div className="text-orange border-2 border-orange flex items-center h-max gap-2 px-2 py-1 rounded-full">
        <CoinIcon color="#F15206" height={25} width={25} />
        <p className="font-semibold">50</p>
      </div>
    </div>}

    {useSearch &&
      <input ref={searchRef} type="text" className="rounded-md outline-none p-2 text-white w-[90%] h-10 bg-lowWhite" />
    }

    {useSearch && <button className={`relative ${iconPosition} transition-all duration-300 ease-in-out`} onClick={toggleSearch}>
      <SearchIcon height={40} width={40} />
    </button>}


    {!useSearch && <div className="">
      <div className="flex z-50 items-center">
        <button onClick={toggleSearch}>
          <SearchIcon height={40} width={40} />
        </button>
        <BurgerIcon color="white" height={40} width={40} />
      </div>
    </div>}
  </header>
}