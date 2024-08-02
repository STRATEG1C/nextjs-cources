import { Movie } from '@/types';
import { prisma } from '@/utils/db';

export async function getMovies(): Promise<Movie[]> {
  return prisma.movie.findMany({
    orderBy: { createdAt: 'desc' },
  });
}
