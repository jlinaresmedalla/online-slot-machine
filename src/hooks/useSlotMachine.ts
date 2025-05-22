import { useAppContext } from '@/contexts/AppContext';
import { rollSlotSessionById, startSlotSession } from '@/utils/slotSessionApi';
import { useEffect, useState } from 'react';

export const useSlotMachine = () => {
  const [isSlotLoading, setIsSlotLoading] = useState(false);
  const { setSlotResult, setCredits, incrementRolls, slotResult, credits } = useAppContext()!;

  const initNewSession = async () => {
    const data = await startSlotSession();

    setCredits(data.credits);
    localStorage.setItem('sessionId', data.sessionId);
  };

  useEffect(() => {
    initNewSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rollSlots = async () => {
    setIsSlotLoading(true);
    setSlotResult([]);

    const sessionId = localStorage.getItem('sessionId');

    const data = await rollSlotSessionById(sessionId);

    setTimeout(() => setSlotResult([data.result[0], null, null]), 1000);
    setTimeout(() => setSlotResult([data.result[0], data.result[1], null]), 2000);
    setTimeout(() => {
      setSlotResult(data.result);
      setCredits(data.credits);
      setIsSlotLoading(false);
      incrementRolls();
    }, 3000);
  };

  return { rollSlots, slotResult, credits, isSlotLoading };
};
