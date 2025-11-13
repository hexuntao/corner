import clsx from 'clsx';
import Link from 'next/link';

import Image from '../elements/Image';

// import { MdVerified as VerifiedIcon } from 'react-icons/md';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
  isScrolled?: boolean;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={clsx(
        'flex w-full flex-grow items-center gap-4 lg:flex-col lg:items-start lg:gap-0.5 lg:px-2',
        expandMenu && 'flex-col !items-start',
      )}
    >
      <Image
        src='/images/avatar.png'
        alt=''
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        rounded='rounded-full'
        className='rotate-3 dark:border-neutral-600 lg:hover:scale-105'
      />
      <>
        <div className='mt-1 flex items-center gap-2 lg:mt-4'>
          <Link href='/' passHref>
            <h2 className='flex-grow  text-lg font-medium lg:text-xl'>Tao</h2>
          </Link>
          {/* <VerifiedIcon size={18} className='text-blue-400' /> */}
        </div>
        <div className='hidden text-[15px] text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex'>
          <a
            href='https://github.com/hexuntao'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            @hexuntao
          </a>
        </div>
      </>
    </div>
  );
};

export default ProfileHeader;
