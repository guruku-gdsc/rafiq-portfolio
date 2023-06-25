export default function Button({ children, ...props }) {
  return (
    <button className="text-xs font-semibold uppercase border border-white rounded py-4 px-6 hover:scale-105 active:scale-95 transition">
      {children}
    </button>
  );
}
