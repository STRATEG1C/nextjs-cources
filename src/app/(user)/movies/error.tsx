'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: number };
  reset: () => void;
}) {
  console.log(error);

  return (
    <div>
      <h2>Oops, something went wrong!</h2>
      <p>
        {error.message} {error.digest}
      </p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
