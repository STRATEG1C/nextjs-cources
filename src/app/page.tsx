import { GamesList } from '@/app/_components/GamesList';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <GamesList />
      </Suspense>
    </main>
  );
}
