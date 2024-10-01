import { ArrowIcon, CoinIcon } from "../utils/IconRegistry";
import { Game } from "../utils/interface";

export default function GamesCard({ gameDetails, date }: { gameDetails: Game, date: Date }) {

  const day = date.getDate().toString().padStart(2, '0'); 
  const month = date.toLocaleString('default', { month: 'short' }); 
  
  const formattedDate = `${day} ${month}`;

  return <div className="text-xs relative w-[170px] h-[120px] md:w-[300px] md:h-[200px]">
    <div className="bg-white w-max flex items-center rounded-full p-1 gap-1 absolute left-[30%] md:left-[38%] -top-2">
      <CoinIcon color="black" height={15} width={15} />
      <p className="">{gameDetails.fee}</p>
      <ArrowIcon height={8} width={8} color="black" />
    </div>

    <div className="bg-lowWhite rounded-md w-full h-full overflow-hidden flex flex-col">
      <div className="h-3 w-full bg-white"></div>

      <div className="w-full h-full flex justify-between px-5">
        <div className="flex flex-col gap-1 items-center justify-center">
          <img src="/mcu.svg" alt="" className="w-6 md:w-16" />
          <p className="text-white font-semibold text-xs md:text-lg">{gameDetails.teamCodeA}</p>
        </div>

        <div className="text-white flex flex-col items-center justify-center">
          <p className="text-[8px] md:text-sm text-white/50">{formattedDate}</p>
          <p className="text-xs md:text-2xl">{gameDetails.time}</p>
        </div>

        <div className="flex flex-col gap-1 items-center justify-center">
          <img src="/rmcf.svg" alt="" className="w-6 md:w-14" />
          <p className="text-white font-semibold text-xs md:text-lg">{gameDetails.teamCodeB}</p>
        </div>
      </div>

      <div className="h-[1pt] w-full bg-white mt-1 md:mt-2"></div>

      <div className="p-2">
        <button className="w-full uppercase bg-green-600 py-1 rounded-md text-white font-semibold">
          Join Game
        </button>
      </div>
    </div>
  </div>
}