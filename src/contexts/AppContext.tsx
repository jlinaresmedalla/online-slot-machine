'use client';
import { Symbol } from '@/lib/domain/slot.domain';
import { User } from '@/lib/domain/user.domain';
import { createContext, useContext, useState, useCallback, PropsWithChildren } from 'react';

interface AppContextProps {
  userInfo: User | null;
  setUserInfo: (u: User | null) => void;
  credits: number;
  setCredits: (c: number) => void;
  slotResult: Symbol[] | null;
  setSlotResult: (r: Symbol[] | null) => void;
  rolls: number;
  incrementRolls: () => void;
  resetGame: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [credits, setCredits] = useState(10);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [slotResult, setSlotResult] = useState<Symbol[] | null>(null);
  const [rolls, setRolls] = useState(0);

  const incrementRolls = useCallback(() => setRolls((r) => r + 1), []);

  const resetGame = useCallback(() => {
    setCredits(10);
    setSlotResult(null);
    setRolls(0);
  }, []);

  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        credits,
        setCredits,
        slotResult,
        setSlotResult,
        rolls,
        incrementRolls,
        resetGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
