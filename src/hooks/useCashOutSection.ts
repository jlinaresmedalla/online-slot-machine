import { CASHOUT_BTN_MOVE_DISTANCE } from '@/constants/app.constants';
import { useAppContext } from '@/contexts/AppContext';
import { cashOutSlotSessionById, startSlotSession } from '@/utils/slotSessionApi';
import { fetchUserInfo } from '@/utils/userApi';
import { useState, useRef } from 'react';

export const useCashOutSection = () => {
  const { credits, rolls, setCredits, resetGame, setUserInfo } = useAppContext()!;

  const [style, setStyle] = useState<React.CSSProperties>({});
  const [disabled, setDisabled] = useState(false);
  const [moved, setMoved] = useState(false);

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const setDialogRef = (ref: HTMLDialogElement | null) => {
    dialogRef.current = ref;
  };

  const randomMove = () => {
    const angle = Math.random() * 2 * Math.PI;
    const x = Math.cos(angle) * CASHOUT_BTN_MOVE_DISTANCE;
    const y = Math.sin(angle) * CASHOUT_BTN_MOVE_DISTANCE;

    const btn = document.getElementById('cashout-button');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();

    let currentLeft = rect.left;
    let currentTop = rect.top;

    if (moved) {
      currentLeft = parseFloat(style.left as string);
      currentTop = parseFloat(style.top as string);
    }

    const btnWidth = rect.width;
    const btnHeight = rect.height;

    const newX = Math.min(window.innerWidth - btnWidth, Math.max(0, currentLeft + x));
    const newY = Math.min(window.innerHeight - btnHeight, Math.max(0, currentTop + y));

    setStyle({
      position: 'fixed',
      top: `${newY}px`,
      left: `${newX}px`,
      transform: 'none',
      zIndex: 1000,
    });

    setMoved(true);
  };

  const handleHover = () => {
    const hasMoveChance = Math.random() < 0.5;
    const hasDisableChance = Math.random() < 0.4;

    if (hasMoveChance) randomMove();

    if (hasDisableChance) {
      setDisabled(true);
      setTimeout(() => setDisabled(false), 1000);
    }
  };

  const handleClick = async () => {
    if (rolls < 2 || disabled) return;
    const sessionId = localStorage.getItem('sessionId');

    await cashOutSlotSessionById(sessionId);

    setCredits(0);

    const updatedUserInfo = await fetchUserInfo();

    if (updatedUserInfo) {
      setUserInfo(updatedUserInfo);
    }

    setTimeout(() => {
      if (dialogRef.current) dialogRef.current.showModal();
    }, 0);
  };

  const closeModal = () => {
    if (dialogRef.current) dialogRef.current.close();
  };

  const handlePlayAgain = async () => {
    const data = await startSlotSession();

    const updatedUserInfo = await fetchUserInfo();

    if (updatedUserInfo) {
      setUserInfo(updatedUserInfo);
    }

    resetGame();
    setCredits(data.credits);
    localStorage.setItem('sessionId', data.sessionId);
    setStyle({});
    setMoved(false);
    closeModal();
  };

  return {
    style,
    disabled,
    handleHover,
    handleClick,
    credits,
    rolls,
    closeModal,
    handlePlayAgain,
    setDialogRef,
  };
};
