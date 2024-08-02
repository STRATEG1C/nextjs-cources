'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface TimeoutedRedirectProps {
  ms: number;
  to: string;
}

export function TimeoutedRedirect(props: TimeoutedRedirectProps) {
  const { ms, to } = props;

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(to);
    }, ms);
  }, [ms, router, to]);

  return null;
}
