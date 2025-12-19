export default function SkeletonCard() {
  return (
    <div className="rounded-md border bg-white dark:bg-gray-800 animate-pulse">
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-t-md w-full" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  );
}
