import GamesCard from "./GamesCard";

export default function GamesOfDay({ }) {
  return <div className="px-4">
    <div className="flex items-center">
      <div className="h-[1pt] w-full bg-[#4c4c4c]"></div>
      <div className="border text-nowrap text-sm border-[#4c4c4c] rounded-full px-3 py-1 text-white">
        14 Sep 2024
      </div>
      <div className="h-[1pt] w-full bg-[#4c4c4c]"></div>
    </div>

    <div className="flex flex-wrap gap-4 mt-8 justify-center">
      <GamesCard />
      <GamesCard />
      <GamesCard />
      <GamesCard />
      <GamesCard />
      <GamesCard />
    </div>
  </div>
}