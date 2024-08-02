import { TimeoutedRedirect } from '@/app/_components/TimeoutedRedirect';

export default function Home() {
  return (
    <main>
      <h1>Hello, I&apos;m your Next.js App</h1>
      <p>Make web great again! Deployed to Vercel 👍</p>
      <TimeoutedRedirect ms={2000} to="/movies" />
    </main>
  );
}
