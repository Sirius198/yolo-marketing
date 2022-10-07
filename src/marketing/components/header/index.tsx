import Image from 'next/image';
import Link from 'next/link';
import TextLogo from '../../assets/logo/textlogo.svg';
import HeaderNav from './components/HeaderNav';

export type MarketingHeaderProps = {};

const defaultProps: MarketingHeaderProps = {};

const MarketingHeader: React.FC<MarketingHeaderProps> = () => {
  const menus = [
    { name: 'How it works', href: '/' },
    { name: 'The program', href: '/' },
    { name: 'Reviews', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'The squad', href: '/' },
  ];

  return (
    <div className="flex h-[120px] w-full flex-row items-center bg-white">
      <Link href={'/'}>
        <a className="px-[70px]">
          <Image src={TextLogo} alt='logo' />
        </a>
      </Link>

      {menus.map((menu, index) => (
        <HeaderNav name={menu.name} href={menu.href} key={index} />
      ))}
    </div>
  );
};

MarketingHeader.defaultProps = defaultProps;

export default MarketingHeader;
