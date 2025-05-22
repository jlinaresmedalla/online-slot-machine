export const startSlotSession = async () => {
  const res = await fetch('/api/v1/slot-session/start', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) throw new Error('Start session failed');

  return res.json();
};

export const cashOutSlotSessionById = async (sessionId: string | null) => {
  if (!sessionId) throw new Error('No sessionId provided');

  const res = await fetch('/api/v1/slot-session/cashout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId }),
  });

  if (!res.ok) throw new Error('Cash out failed');

  return res.json();
};

export const rollSlotSessionById = async (sessionId: string | null) => {
  if (!sessionId) throw new Error('No sessionId provided');

  const res = await fetch('/api/v1/slot-session/roll', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId }),
  });

  if (!res.ok) throw new Error('Roll failed');

  return res.json();
};
