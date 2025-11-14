'use client';

import clsx from 'clsx';

interface MobileMenuButtonProps {
  expandMenu: boolean;
  setExpandMenu: (expand: boolean) => void;
}

const MobileMenuButton = ({
  expandMenu,
  setExpandMenu,
}: MobileMenuButtonProps) => {
  const handleMenuToggle = () => {
    setExpandMenu(!expandMenu);
  };

  const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }];

  return (
    <div
      className='flex h-[21px] w-[26px] cursor-pointer flex-col justify-between lg:hidden'
      onClick={handleMenuToggle}
    >
      {menuSpanData.map((item) => (
        <span
          key={item.index}
          className={clsx(
            'h-[3px] w-full rounded-full bg-neutral-950 transition-all duration-500 dark:bg-neutral-100',
            expandMenu && item.index === 1 && 'origin-left rotate-45',
            expandMenu && item.index === 2 && 'w-0',
            expandMenu && item.index === 3 && 'origin-left -rotate-45',
          )}
        />
      ))}
    </div>
  );
};

export default MobileMenuButton;
