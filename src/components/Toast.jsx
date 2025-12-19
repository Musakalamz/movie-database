import { useFavorites } from "../context/FavoritesContext";

export default function Toast() {
  const { toast } = useFavorites();

  if (!toast.show) return null;

  const bgColors = {
    success: "bg-green-600",
    error: "bg-red-600",
    default: "bg-gray-800",
    info: "bg-blue-600",
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div
        className={`${
          bgColors[toast.type] || bgColors.default
        } text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3`}
      >
        {toast.type === "success" && (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
        <span className="font-medium">{toast.message}</span>
      </div>
    </div>
  );
}
