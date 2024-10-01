import { useEffect, useRef, useState } from "react";
import { CoinIcon, SearchIcon, UserIcon } from "../utils/IconRegistry";

export default function MobileHeader({ isActive }: { isActive: boolean }) {
  const searchRef = useRef<HTMLInputElement>(null);
  const [useOptions, setUseOptions] = useState<boolean>(false);
  const [useSearch, setUseSearch] = useState<boolean>(false);
  const [iconPosition, setIconPosition] = useState<string>('right-10');

  const toggleHamburger = () => {
    setUseOptions(prev => !prev);
  }

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

  return <>
    <div className={`md:hidden bg-black rounded-full overflow-hidden fixed z-50 -translate-x-10 top-5 ${!isActive && 'translate-x-5'} transition-transform duration-500 ease-in-out`}>
      <UserIcon color="white" height={40} width={40} />
    </div>

    <header className={`${isActive ? ' h-[8%]' : 'h-0 opacity-0'} transition-all duration-300 ease-in-out md:hidden w-full bg-black border-b flex justify-between items-center px-5`}>
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
        <div className="flex gap-2 z-50 items-center">
          <button onClick={toggleSearch}>
            <SearchIcon height={40} width={40} />
          </button>
          <button onClick={toggleHamburger} className="flex flex-col gap-1 w-6">
            <div
              className={`${useOptions ? 'rotate-45 translate-y-2' : ''
                } h-1 w-full bg-white transition-transform duration-300 ease-in-out origin-center`}
            ></div>
            <div
              className={`${useOptions ? 'opacity-0' : ''
                } h-1 w-full bg-white transition-opacity duration-300 ease-in-out`}
            ></div>
            <div
              className={`${useOptions ? '-rotate-45 -translate-y-2' : ''
                } h-1 w-full bg-white transition-transform duration-300 ease-in-out origin-center`}
            ></div>
          </button>

        </div>
      </div>}
    </header>
  </>
}