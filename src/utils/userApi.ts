export const fetchUserInfo = async () => {
  const res = await fetch('/api/v1/user/user-info');

  if (!res.ok) throw new Error('Failed to fetch user info');

  return res.json();
};
