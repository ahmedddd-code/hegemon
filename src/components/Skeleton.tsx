export function Skeleton({ className = '', lines = 1 }: { className?: string; lines?: number }) {
  return <div className={`skeleton ${className}`} aria-hidden="true">{Array.from({ length: lines }, (_, index) => <span key={index} />)}</div>;
}
