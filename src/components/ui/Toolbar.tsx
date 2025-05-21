import WalletIcon from '@/app/icons/wallet-svgrepo-com.svg';
import Image from 'next/image';

export const Toolbar = () => (
  <nav className="navbar shadow-sm px-4">
    <div className="flex-1">
      <span className="text-2xl font-bold tracking-wide text-primary">CASINO</span>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-primary shadow-casino">
        <Image src={WalletIcon} alt="Wallet" width={24} height={24} />
        <span className="font-semibold text-base text-primary">{10}</span>
      </div>
      <div className="avatar avatar-placeholder">
        <div className="bg-neutral text-neutral-content w-10 rounded-full">
          <span>JL</span>
        </div>
      </div>
    </div>
  </nav>
);
