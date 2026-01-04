export function AmbientMotionLayer() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.05]">
      {/* Ambient nebula background */}
      <div className="absolute inset-0 animate-ambient-nebula" />

      {/* Drifting orb 1 */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-ambient-orb-1"
        style={{
          background:
            "radial-gradient(circle, rgba(110,174,220,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Drifting orb 2 */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full animate-ambient-orb-2"
        style={{
          background:
            "radial-gradient(circle, rgba(66,115,150,0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
