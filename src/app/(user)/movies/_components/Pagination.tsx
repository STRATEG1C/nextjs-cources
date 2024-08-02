'use client';

import { useRouter } from 'next/navigation';
import { Pagination as MUIPagination } from '@mui/material';
import React from 'react';

interface PaginationProps {
  currentPage: number;
}

export function Pagination(props: PaginationProps) {
  const { currentPage } = props;

  const router = useRouter();

  const handleChangePagination = (
    _: React.ChangeEvent<unknown>,
    page: number
  ) => {
    router.push(`/movies/${page}`);
  };

  return (
    <MUIPagination
      page={currentPage}
      count={10}
      onChange={handleChangePagination}
    />
  );
}
