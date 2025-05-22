'use client';

import { SLOT_POSITIONS, SLOT_SYMBOL_LABELS } from '@/constants/app.constants';
import { Symbol } from '@/lib/domain/slot.domain';
import { useSlotMachine } from '@/hooks/useSlotMachine';
import { Button } from '@/components';
import Image from 'next/image';

export const SlotMachine = () => {
  const { rollSlots, slotResult, credits, isSlotLoading } = useSlotMachine();

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <Button
        variant="secondary"
        onClick={() => rollSlots()}
        disabled={isSlotLoading || credits <= 0}
        className="w-40 h-16 text-xl animate-bounce"
      >
        {isSlotLoading ? <span className="loading loading-spinner"></span> : 'Roll'}
      </Button>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-6xl w-full justify-center items-center">
        {SLOT_POSITIONS.map((i) => (
          <div
            key={i}
            className="
              flex items-center justify-center
              rounded-2xl border-4 border-base-300 bg-base-200
              w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56
              shadow-lg
              transition-all
            "
          >
            {slotResult && slotResult[i] ? (
              <Image
                src={SLOT_SYMBOL_LABELS[slotResult[i] as Symbol]}
                alt={SLOT_SYMBOL_LABELS[slotResult[i] as Symbol]}
                width={180}
                height={180}
                priority
                className={`object-contain w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-pulse`}
              />
            ) : isSlotLoading ? (
              <span className="loading loading-spinner loading-2xl w-24 h-24"></span>
            ) : (
              <Image
                src={SLOT_SYMBOL_LABELS['C']}
                alt={SLOT_SYMBOL_LABELS['C']}
                width={180}
                height={180}
                priority
                className={`object-contain w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-pulse`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
