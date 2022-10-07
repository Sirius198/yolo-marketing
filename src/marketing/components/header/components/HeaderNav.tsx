import Link from 'next/link';

type HeaderNavProps = {
  name: string;
  href: string;
  [x: string]: any;
};

const defaultProps: HeaderNavProps = {
  name: 'How it works',
  href: '/',
};

const HeaderNav: React.FC<HeaderNavProps> = ({ name, href, ...rest }) => {
  return (
    <Link href={href}>
      <a className="px-[30px] text-base text-[#0C4A6E]" {...rest}>
        {name}
      </a>
    </Link>
  );
};

HeaderNav.defaultProps = defaultProps;

export default HeaderNav;
