"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';

export const PayPalIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn('h-6 w-6', className)}
    {...props}
  >
    <path d="M8.286 3.042c.43-.135.895-.216 1.383-.216h4.628c3.298 0 5.972 2.674 5.972 5.972s-2.674 5.972-5.972 5.972h-2.316a.75.75 0 01-.75-.75v-8.25a.75.75 0 00-.75-.75H8.286zm2.25 2.25a.75.75 0 000 1.5h1.5v3.75h-1.5a.75.75 0 000 1.5h1.5v.75a2.25 2.25 0 100-4.5V7.542h-1.5a.75.75 0 00-.75-.75h-.75z" />
  </svg>
);
