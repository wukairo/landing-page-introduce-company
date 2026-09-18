export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "logo-light" : ""}`} aria-label="LAZTAR">
      <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>LAZTAR</span>
    </span>
  );
}
