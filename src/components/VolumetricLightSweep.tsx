export function VolumetricLightSweep() {
  return (
    <div className="fixed inset-0 pointer-events-none z-5 opacity-30 overflow-hidden">
      {/* Diagonal light sweep */}
      <div
        className="
          absolute -top-full -left-full
          w-[300%] h-[300%]
          animate-diagonal-sweep
        "
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(110,174,220,0.15) 48%, rgba(110,174,220,0.25) 50%, rgba(110,174,220,0.15) 52%, transparent 60%)",
        }}
      />

      {/* Vertical light sweep */}
      <div
        className="
          absolute top-0 bottom-0 w-[80px]
          animate-vertical-sweep
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(110,174,220,0.2), transparent)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}
