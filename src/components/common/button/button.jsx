export default function Button({ children, className }) {
  return (
    <button
      className={`text-xs font-semibold uppercase tracking-wide border border-white rounded py-4 px-6 hover:scale-105 active:scale-95 transition ${className}`}
    >
      {children}
    </button>
  );
}
