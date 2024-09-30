import TabButton from "./TabButton";

export default function GameTabOptions() {
  return <div className="w-full p-4 flex gap-3">
    <TabButton isActive={true}>
      Upcoming
    </TabButton>

    <TabButton isActive={false}>
      Live
    </TabButton>

    <TabButton isActive={false}>
      Completed
    </TabButton>
  </div>
}