import { ReactNode } from "react";

export default function TabButton({ isActive, children }: { isActive: boolean, children: ReactNode}) {
  return <button className={`text-xs md:text-sm py-2 px-3 ${isActive ? 'bg-lowWhite' : 'border border-lowWhite' } hover:bg-lowWhite transition-all duration-300 ease-in-out rounded-md text-white`}>
    {children}
  </button>
}