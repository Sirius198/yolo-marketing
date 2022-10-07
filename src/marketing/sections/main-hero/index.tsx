import Image from 'next/image';
import Typography from 'src/marketing/components/typography';
import GirlWithPhoneImage from '../../assets/images/girl_with_phone.png';
import Line1 from '../../assets/images/lines/hero-line1.svg';
import Line2 from '../../assets/images/lines/hero-line2.svg';
import Line3 from '../../assets/images/lines/hero-line3.svg';
import Line4 from '../../assets/images/lines/hero-line4.svg';
import FloatingIcon1 from '../../assets/images/hero/1.svg';
import FloatingIcon2 from '../../assets/images/hero/2.svg';
import FloatingIcon3 from '../../assets/images/hero/3.svg';
import FloatingIcon4 from '../../assets/images/hero/4.svg';

export type MainHeroSectionProps = {};
const defaultProps: MainHeroSectionProps = {};

const MainHeroSection: React.FC<MainHeroSectionProps> = () => {
  return (
    <section
      className="w-full"
      style={{
        background:
          'linear-gradient(227.93deg, #5EEAD4 -55.95%, #CCFBF1 100%)',
      }}
    >
      <div className="mx-auto flex w-full flex-col-reverse lg:max-w-[1080px] lg:flex-row lg:justify-between lg:gap-[70px]">
        <div className="flex-1 pt-[110px]">
          <Typography
            weight={700}
            className="mb-[30px] text-[64px] leading-[70px] lg:text-[96px] lg:leading-[120px]"
          >
            Sharing is Caring.
          </Typography>
          <Typography className="text-sm leading-6 lg:text-lg lg:leading-[34px]">
            We are a health care startup offering virtual care,
            prescription and a close community support network to patients
            all over the world.
          </Typography>
        </div>
        <div className="flex-1">
          <div
            className="relative mx-auto flex h-[350px] w-[320px] max-w-full justify-center
            overflow-hidden rounded-b-[360px]
            bg-[#FCA5A5] pt-5
            text-center lg:h-[720px] lg:w-[460px] lg:pt-[80px]"
          >
            <div className="h-[400px] w-[240px] lg:h-[640px] lg:w-[380px]">
              <Image src={GirlWithPhoneImage} alt="" />
            </div>

            {/* Lines */}
            <div className="absolute top-[100px] left-[82px]">
              <Image src={Line1} alt="" />
            </div>

            <div className="absolute top-[219px] left-[84px]">
              <Image src={Line2} alt="" />
            </div>

            <div className="absolute top-[161px] left-[190px]">
              <Image src={Line3} alt="" />
            </div>

            <div className="absolute top-[261px] left-[190px]">
              <Image src={Line4} alt="" />
            </div>

            <div className="absolute top-[82px] left-[10px] h-[50px] w-[76px] rounded-[30px] bg-[#FEF2F2]">
              <Image src={FloatingIcon1} alt="" />
              {/* <Typography className="text-sm text-[#EF4444]">Healthcare</Typography> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainHeroSection.defaultProps = defaultProps;

export default MainHeroSection;
