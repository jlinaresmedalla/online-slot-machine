export const InstructionSection = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="collapse collapse-arrow bg-base-200 w-full max-w-xl shadow">
        <input type="checkbox" />
        <div className="collapse-title text-md font-bold text-secondary">How to Play</div>
        <div className="collapse-content text-base-content">
          <ul className="list-disc list-inside text-left">
            <li>
              Click <span className="font-semibold text-secondary">Roll</span> to spin the slots.
            </li>
            <li>Each spin costs 1 credit. Try to match the symbols to win more credits!</li>
            <li>You can cash out your credits after at least 2 spins.</li>
            <li>Good luck and have fun!</li>
          </ul>
          <div className="mt-4">
            <div className="font-semibold mb-1">There are 4 possible symbols:</div>
            <ul className="list-disc list-inside text-left">
              <li>🍒 Cherry (10 credits)</li>
              <li>🍋 Lemon (20 credits)</li>
              <li>🍊 Orange (30 credits)</li>
              <li>🍉 Watermelon (40 credits)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
