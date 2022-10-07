import Image from 'next/image';
import Link from 'next/link';
import Typography from 'src/marketing/components/typography';
import { EmailBox } from './components/EmailBox';
import { pageData } from './pageData';
import FullLogo from '../../assets/logo/fulllogo.svg';

export type FooterSectionProps = {};
const defaultProps: FooterSectionProps = {};

const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <section className="w-full py-8 lg:py-20">
      <div className="mx-auto w-full lg:max-w-[1080px]">
        <div className="flex flex-col justify-between lg:flex-row">
          <div>
            <Typography weight={600} className="mb-2 text-xl lg:text-2xl">
              Stay up to date with us!
            </Typography>
            <Typography className="mb-6 text-[13px] text-[#64748B] lg:text-sm">
              Join our newsletter to more updates about Healtcare
            </Typography>

            <EmailBox />
          </div>

          <div className="mt-9 flex h-[190px] flex-col justify-between lg:mt-0 lg:h-[120px]">
            {pageData.links1.map(({ href, title }, index) => (
              <Link href={href} key={index}>
                <a className="">
                  <Typography
                    weight={600}
                    color="body"
                    className="text-[15px] leading-[18.75px] lg:text-[13px] lg:leading-[16.25px]"
                  >
                    {title}
                  </Typography>
                </a>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex h-[190px] flex-col justify-between lg:mt-0 lg:h-[120px]">
            {pageData.links2.map(({ href, title }, index) => (
              <Link href={href} key={index}>
                <a className="">
                  <Typography
                    weight={600}
                    color="body"
                    className="text-[15px] leading-[18.75px] lg:text-[13px] lg:leading-[16.25px]"
                  >
                    {title}
                  </Typography>
                </a>
              </Link>
            ))}
          </div>

          <div className="flex w-full justify-center lg:w-auto">
            <div className="h-[65px] w-[93px] lg:h-[93px] lg:w-[134px]">
              <Image src={FullLogo} width="100%" height="100%" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-[100px] flex w-full flex-col-reverse justify-between border-t-[1px]
      border-t-[#E2E8F0] pt-8 lg:max-w-[1080px] lg:flex-row"
      >
        <Typography
          color="body"
          weight={400}
          className="mt-8 text-center text-sm lg:mt-0"
        >
          © 2022 Yolo Health
        </Typography>
        <div className="flex flex-row items-center justify-center gap-4">
          {pageData.socialLinks.map(({ href, icon }, index) => (
            <Link href={href} key={index}>
              <a>
                <Image src={icon} alt="" />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

FooterSection.defaultProps = defaultProps;

export default FooterSection;
