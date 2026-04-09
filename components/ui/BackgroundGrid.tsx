export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#03030a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,240,255,0.08),transparent_44%),radial-gradient(circle_at_80%_75%,rgba(255,122,66,0.08),transparent_42%)]" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:96px_96px]" />
    </div>
  );
}
