'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { fetchUserInfo } from '@/utils/userApi';
import { useAppContext } from '@/contexts/AppContext';

export const UserInfoSection = () => {
  const { userInfo, setUserInfo } = useAppContext()!;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserInfo();

      if (data) {
        setUserInfo(data);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initials = (userInfo?.firstName?.[0] ?? '') + (userInfo?.lastName?.[0] ?? '');

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-primary shadow-casino">
        <Image src={'/icons/wallet-svgrepo-com.svg'} alt="Wallet" width={24} height={24} />
        <span className="font-semibold text-base text-primary">
          {userInfo ? userInfo.credits : <span className="loading loading-spinner"></span>}
        </span>
      </div>
      <div className="avatar avatar-placeholder">
        <div className="bg-neutral text-neutral-content w-10 rounded-full">
          <span>
            {initials ? initials.toUpperCase() : <span className="loading loading-spinner"></span>}
          </span>
        </div>
      </div>
    </div>
  );
};
