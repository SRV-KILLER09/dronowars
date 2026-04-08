export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[radial-gradient(circle_at_20%_18%,rgba(255,80,0,0.12),transparent_42%),radial-gradient(circle_at_82%_28%,rgba(0,255,140,0.08),transparent_48%),#03030a]">
      <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(0,0,0,0.22),transparent_55%),radial-gradient(circle_at_center,transparent_0%,rgba(3,3,10,0.82)_76%)]" />
      <div className="absolute inset-0 opacity-16 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
    </div>
  );
}
