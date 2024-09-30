import GamesCard from "./GamesCard";

export default function GamesOfDay({ }) {
  return <div className="px-4">
    <div className="flex items-center">
      <div className="h-[1pt] w-full bg-lowWhite"></div>
      <div className="border text-nowrap text-sm border-lowWhite rounded-full px-3 py-1 text-white">
        14 Sep 2024
      </div>
      <div className="h-[1pt] w-full bg-lowWhite"></div>
    </div>

    <div className="flex flex-wrap gap-5 mt-8 justify-center">
      <GamesCard />
      <GamesCard />
      <GamesCard />
      <GamesCard />
      <GamesCard />
      <GamesCard />
    </div>
  </div>
}