import TabButton from "./TabButton";

export default function GameTabOptions({ isFocused }: { isFocused: boolean }) {
  return (
    <div
      className={`w-full p-4 flex gap-3 transition-all duration-300 ease-in-out ${
        isFocused ? 'opacity-100' : 'opacity-0 h-0'
      }`}
    >
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
  );
}
