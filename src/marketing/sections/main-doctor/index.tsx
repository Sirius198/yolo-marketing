import Image from 'next/image';
import ArrowRightSvg from '../../assets/icons/ArrowRight.svg';
import DoctorImage from '../../assets/images/doctor.png';
import Typography from 'src/marketing/components/typography';
import { ArrowButton } from 'src/marketing/components/button/ArrowButton';

export type MainDoctorSectionProps = {};
const defaultProps: MainDoctorSectionProps = {};

const MainDoctorSection: React.FC<MainDoctorSectionProps> = () => {
  return (
    <section className="w-full py-10 md:py-[140px]">
      <div className="mx-auto flex flex-col lg:max-w-[1080px] lg:flex-row">
        <div className="flex-1 px-5">
          <Image src={DoctorImage} alt="" />
        </div>
        <div className="z-10 -mt-5 flex-1 lg:-ml-[150px] lg:mt-10">
          <div className="rounded-br-[50px] bg-[#CCFBF1] p-[24px] lg:rounded-br-[75px] lg:p-[50px]">
            <Typography
              weight={600}
              className="mb-1 text-base lg:mb-2 lg:text-lg"
            >
              Dr. Jordan Gordon
            </Typography>
            <Typography
              color="secondary"
              className="mb-4 text-sm lg:mb-10 lg:text-[15px]"
            >
              Chiropractor
            </Typography>

            <Typography className="mb-6 text-lg leading-[34px] lg:mb-10 lg:text-[32px] lg:leading-[50px]">
              “With Yolo Health, we can help and manage easily on what
              problems the patient is facing.”
            </Typography>

            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2.5">
                <Typography color="body" weight={600} className="text-sm">
                  Read Story
                </Typography>
                <Image src={ArrowRightSvg} alt="" />
              </div>
              <div className="flex flex-row gap-0.5">
                <ArrowButton direction="left" />
                <ArrowButton direction="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainDoctorSection.defaultProps = defaultProps;

export default MainDoctorSection;
