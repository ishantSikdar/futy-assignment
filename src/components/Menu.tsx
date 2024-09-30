import { CoinIcon, FootballIcon, GamepadIcon, UserIcon } from "../utils/IconRegistry";
import MenuItem from "./MenuItem";

export default function Menu() {
  return <div className="mt-2 flex md:flex-col w-full py-3 gap-6 text-[#858585]">
    <MenuItem text="Profile" Icon={<UserIcon color="#292929" width={50} height={50} />} />
    <MenuItem text="Games" Icon={<GamepadIcon color="#ffffff" width={50} height={50} />} />
    <MenuItem text="Watch" Icon={<FootballIcon color="#292929" width={50} height={50} />} />
    <MenuItem text="Coins" Icon={<CoinIcon color="#292929" width={50} height={50} />} />
  </div>
}