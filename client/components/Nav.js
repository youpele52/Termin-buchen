import Image from 'next/image'
import NavItem from './NavItem'
import {
  FireIcon,
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
  ChatAlt2Icon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Nav() {
  const router = useRouter()
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <div onClick={() => router.push('/')}>
          <NavItem title='HOME' Icon={HomeIcon} />
        </div>
        {/* <NavItem title='TRENDING' Icon={FireIcon} />
        <NavItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <NavItem title='COLLECTIONS' Icon={CollectionIcon} />
        <NavItem title='SEARCH' Icon={SearchIcon} /> */}
        <div onClick={() => router.push('/about')}>
          <NavItem title='CONTACT' Icon={ChatAlt2Icon} />
        </div>

        <div onClick={() => router.push('/about')}>
          <NavItem title='ACCOUNT' Icon={UserIcon} />
        </div>
      </div>
      {/* next Image does lazy image loading, it needs to be imported like normal react comp*/}
      {/* <Image
        className='object-contain'
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
      /> */}
    </header>
  )
}

export default Nav
