import { ReactNode } from "react";

export default function TabButton({ isActive, children }: { isActive: boolean, children: ReactNode}) {
  return <button className={`py-2 px-3 ${isActive ? 'bg-lowWhite' : 'border border-lowWhite' } rounded-md text-white`}>
    {children}
  </button>
}