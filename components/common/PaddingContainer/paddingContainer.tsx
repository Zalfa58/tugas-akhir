import { ReactNode } from "react";

interface PaddingContainerProps {
  children: ReactNode;
}
export default function PaddingContainer({ children }: PaddingContainerProps) {
  return (
    <section className="px-[16px] md:px-[80px] max-w-[1280px] m-auto">
      {children}
    </section>
  );
}
