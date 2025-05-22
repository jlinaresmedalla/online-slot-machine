import { CashOutSection, InstructionSection, SlotMachine } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-base-100">
      <div className="max-w-3xl w-full flex flex-col items-center gap-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary text-center">
          Welcome to the Ultimate Online Slot Machine!
        </h1>
        <CashOutSection />
        <SlotMachine />
        <p className="text-base sm:text-lg text-center text-base-content">
          Spin the reels and try to win as many credits as you can. <br />
          Press <span className="font-bold text-secondary">Roll</span> to start playing!
        </p>
        <InstructionSection />
      </div>
    </div>
  );
}
