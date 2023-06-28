export default function Button({ children, className }) {
  return (
    <button
      className={`text-xs font-semibold uppercase tracking-wide border border-white rounded py-4 max-md:py-3 px-6 max-sm:px-5 hover:scale-105 active:scale-95 transition ${className}`}
    >
      {children}
    </button>
  );
}
