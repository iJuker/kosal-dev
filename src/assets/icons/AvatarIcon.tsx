export default function AvatarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
      <circle cx="50" cy="38" r="20" />
      <ellipse cx="50" cy="90" rx="35" ry="28" />
    </svg>
  );
}
