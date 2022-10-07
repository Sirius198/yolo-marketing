import Image from 'next/image';
import ArrowRightSvg from '../../assets/icons/ArrowRight.svg';
import DoctorImage from '../../assets/images/doctor.png';
import GreenTick from '../../assets/images/greenTick.svg';
import Typography from 'src/marketing/components/typography';
import { ArrowButton } from 'src/marketing/components/button/ArrowButton';
import { pageData } from './pageData';
import Button from 'src/marketing/components/button';

export type MainCommunitySectionProps = {};
const defaultProps: MainCommunitySectionProps = {};

const MainCommunitySection: React.FC<MainCommunitySectionProps> = () => {
  return (
    <section className="w-full bg-[#FFF7ED] pb-12 lg:pb-[140px]">
      <div className="mx-auto flex flex-col lg:max-w-[1080px] lg:flex-row lg:justify-between">
        <div className="flex-1 text-center">
          <div>
            <Image
              src={pageData.experts[0].photo}
              className="rounded-b-full"
              alt=""
            />
          </div>
          <Typography
            weight={600}
            className="mt-2 text-lg leading-[22.5px]"
          >
            {pageData.experts[0].name}
          </Typography>
          <div className="mt-2 flex flex-row items-center justify-center gap-2.5 lg:mt-4">
            <Image src={GreenTick} alt="" />
            <Typography weight={500} className="text-[15px]">
              {pageData.experts[0].name}
            </Typography>
          </div>
        </div>

        {/* Riht panel */}
        <div className="flex-1 px-6 pt-6 lg:pt-[100px]">
          <Typography
            weight={700}
            className="mb-4 text-3xl leading-[37.5px] lg:mb-6 lg:text-5xl lg:leading-[48px]"
          >
            Meet the experts in the community
          </Typography>

          <Typography
            color="body"
            className="mb-6 text-sm lg:mb-[50px] lg:text-lg"
          >
            They will always help, guide and provide solutions for your
            personal healthcare.
          </Typography>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {pageData.roles.map((role) => (
              <div key={role} className="mb-4 flex flex-row gap-2.5">
                <Image
                  src={GreenTick}
                  alt=""
                  width={18.33}
                  height={18.33}
                />
                <Typography weight={500} className="text-base leading-5">
                  {role}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mt-[38px] text-center lg:mt-[50px] lg:text-left">
            <Button>Join Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

MainCommunitySection.defaultProps = defaultProps;

export default MainCommunitySection;
