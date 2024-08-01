
'use client'

import { usePathname } from 'next/navigation';

const BackgroundImage = () => {
  const pathname = usePathname();
  let backgroundClass = '';

  switch (pathname) {
    case '/':
      backgroundClass = 'bg-home-image';
      break;
    default:
      backgroundClass = 'bg-other-image'; // Default background
  }

  return (
    <div className={`w-full h-full ${backgroundClass} bg-cover bg-center bg-fixed bg-no-repeat relative text-white`}>
      {/* Content here */}
    </div>
  );
}

export default BackgroundImage;

