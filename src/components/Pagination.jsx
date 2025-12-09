export default function Pagination({ page, totalPages, onPrev, onNext }) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <div className="text-sm text-gray-600">
        Page {page} of {totalPages || 1}
      </div>
      <div className="flex gap-2">
        <button
          className="rounded-md border px-3 py-2 disabled:opacity-50"
          onClick={onPrev}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          className="rounded-md border px-3 py-2 disabled:opacity-50"
          onClick={onNext}
          disabled={totalPages ? page >= totalPages : false}
        >
          Next
        </button>
      </div>
    </div>
  );
}
