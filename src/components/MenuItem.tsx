import { ReactNode } from "react";

export default function MenuItem({ Icon, text, className, isActive }: { className?: string, text: string, Icon: ReactNode, isActive?: boolean}) {
  return <div className={`flex flex-col items-center gap-2 text-xs font-semibold ${className}`}>
    {Icon}
    {isActive && <p>{text}</p>}
  </div>
}