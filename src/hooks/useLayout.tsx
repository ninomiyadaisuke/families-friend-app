import { useAtom, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { drawerToggleContext } from '@/contexts/drawerToggle';
import { useBreakPoint } from '@/hooks/useBreakPoint';

export const useLayout = () => {
  const { tablet } = useBreakPoint();
  const [drawerToggle, setDrawerToggle] = useAtom(drawerToggleContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const hoverEvent = (tablet: boolean) => {
    if (tablet) return;
    setIsOpen(true);
  };
  const unHoverEvent = (tablet: boolean) => {
    if (tablet) return;
    setIsOpen(false);
  };

  return { tablet, drawerToggle, setDrawerToggle, router, isOpen, setIsOpen, hoverEvent, unHoverEvent };
};
