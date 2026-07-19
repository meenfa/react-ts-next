'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()} // 👈 This tries to re-render the page
        className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
      >
        Try again
      </button>
    </div>
  );
}