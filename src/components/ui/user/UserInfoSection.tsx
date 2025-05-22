'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchUserInfo } from '@/utils/userApi';
import { User } from '@/lib/domain/user.domain';

export const UserInfoSection = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUserInfo()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  const initials = (user?.firstName?.[0] ?? '') + (user?.lastName?.[0] ?? '');

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-primary shadow-casino">
        <Image src={'/icons/wallet-svgrepo-com.svg'} alt="Wallet" width={24} height={24} />
        <span className="font-semibold text-base text-primary">
          {user ? user.credits : <span className="loading loading-spinner"></span>}
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
