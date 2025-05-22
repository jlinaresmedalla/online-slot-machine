import { UserInfoSection } from '../ui/user/UserInfoSection';

export const Toolbar = () => (
  <nav className="navbar shadow-sm px-4">
    <div className="flex-1">
      <span className="text-2xl font-bold tracking-wide text-primary">CASINO</span>
    </div>
    <UserInfoSection />
  </nav>
);
