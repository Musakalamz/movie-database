export default function ErrorNotice({ message, onRetry }) {
  return (
    <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
      {message}
      {onRetry && (
        <button className="ml-2 underline" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}
