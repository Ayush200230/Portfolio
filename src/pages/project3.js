import Image from 'next/image';
import propertyImg from '../../public/fintechrelay.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Fintech Relay</h2>
      
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 dark:text-gray-400'>
        <div className='col-span-4'>
          
          {/*<a
            href='https://github.com/fireclint/property-finder'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
  </a>*/}
          <a
            href='https://fintech-relay.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 dark:text-white'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 dark:text-gray-400 py-2 flex items-center'>
            <RiRadioButtonFill className='pr-1' /> Nextjs
          </p>
          <p className='text-gray-600 dark:text-gray-400 py-2 flex items-center'>
            <RiRadioButtonFill className='pr-1' /> Tailwind
          </p>
          <p className='text-gray-600 dark:text-gray-400 py-2 flex items-center'>
            <RiRadioButtonFill className='pr-1' /> Javascript
          </p>
          
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;