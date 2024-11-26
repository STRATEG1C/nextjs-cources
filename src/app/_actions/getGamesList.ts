import { prisma } from '@/lib/prisma';
import { Game } from '@/types';

export const getGamesList = async (): Promise<Game[]> => {
  return prisma.game.findMany();
};
