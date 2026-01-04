export function MorphingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob-main">
        <div
          className="w-[700px] h-[700px] animate-blob-shape-main"
          style={{
            background:
              "radial-gradient(circle, rgba(110,174,220,0.08) 0%, rgba(66,115,150,0.05) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Secondary blob */}
      <div className="absolute top-1/4 right-1/4 animate-blob-secondary">
        <div
          className="w-[450px] h-[450px] animate-blob-shape-secondary"
          style={{
            background:
              "radial-gradient(circle, rgba(66,115,150,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Tertiary blob */}
      <div className="absolute bottom-1/4 left-1/3 animate-blob-tertiary">
        <div
          className="w-[500px] h-[500px] animate-blob-shape-tertiary"
          style={{
            background:
              "radial-gradient(circle, rgba(110,174,220,0.06) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
