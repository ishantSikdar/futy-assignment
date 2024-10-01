import { Game } from "../utils/interface";
import GamesCard from "./GamesCard";

export default function GamesOfDay({ games, date }: { games: Game[], date: Date }) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return <div className="px-4">
    <div className="flex items-center">
      <div className="h-[1pt] w-full bg-[#4c4c4c]"></div>
      <div className="border text-nowrap text-sm border-[#4c4c4c] rounded-full px-3 py-1 text-white">
        {formattedDate}
      </div>
      <div className="h-[1pt] w-full bg-[#4c4c4c]"></div>
    </div>

    <div className="flex flex-wrap gap-4 mt-8 justify-center">
      {games.map((game) => <GamesCard key={game.id} gameDetails={game} date={date} />)}
    </div>
  </div>
}