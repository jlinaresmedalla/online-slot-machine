'use client';

import { Button } from '@/components';
import { useCashOutSection } from '@/hooks/useCashOutSection';

export const CashOutSection = () => {
  const {
    credits,
    style,
    disabled,
    handleHover,
    handleClick,
    rolls,
    closeModal,
    handlePlayAgain,
    setDialogRef,
  } = useCashOutSection();

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
      <Button
        id="cashout-button"
        className="transition-all duration-300"
        style={style}
        onMouseEnter={handleHover}
        onClick={handleClick}
        disabled={disabled || rolls < 2}
      >
        Cash Out
      </Button>
      <div className="bg-base-200 rounded px-4 py-2 font-bold text-primary">
        Credits: <span className="text-lg text-white">{credits}</span>
      </div>
      <dialog id="cashout-modal" ref={setDialogRef} className="modal">
        <div className="modal-box bg-base-100">
          <h3 className="font-bold text-lg text-primary text-center mb-4">
            Your credits have been transferred to your account!
          </h3>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="secondary" onClick={handlePlayAgain}>
              Play Again
            </Button>
            <form method="dialog">
              <Button onClick={closeModal}>Close</Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
