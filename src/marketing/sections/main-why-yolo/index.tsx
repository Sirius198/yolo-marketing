import Image from 'next/image';
import GreenTick from '../../assets/images/greenTick.svg';
import DoctorInPhone from '../../assets/images/doctor_in_phone.png';
import Typography from 'src/marketing/components/typography';

export type MainWhyYoloSectionProps = {};
const defaultProps: MainWhyYoloSectionProps = {};

const MainWhyYoloSection: React.FC<MainWhyYoloSectionProps> = () => {
  return (
    <section className="w-full py-10 lg:py-[140px]">
      <div className="mx-auto flex flex-col gap-[50px] lg:max-w-[1080px] lg:flex-row lg:gap-[110px]">
        <div className="flex-1">
          <Image src={DoctorInPhone} className="max-w-[440px]" alt="" />
        </div>
        <div className="w-full flex-1">
          <Typography
            color="primary"
            weight="bold"
            className="mb-2 text-3xl lg:mb-6 lg:mt-[40px] lg:text-5xl"
          >
            Why YoloHealth?
          </Typography>
          <Typography
            color="body"
            className="mb-6 text-sm lg:mb-[30px] lg:text-lg"
          >
            We are a health care startup offering virtual care,
            prescription and a close community support network to patients
            all over the world.
          </Typography>

          <div className="mb-6 flex flex-row items-start gap-3.5 lg:mb-[30px]">
            <div className="pt-2">
              <Image src={GreenTick} alt="" />
            </div>
            <div className="flex-1">
              <Typography
                color="primary"
                weight="semibold"
                className="text-lg lg:text-xl"
              >
                Health System
              </Typography>
              <Typography color="body" className="text-sm lg:text-base">
                Pretium cras proin volutpat aliquam egestas nunc, egestas.
                Non nibh dignissim porttitor pretium nulla velit et
                bibendum arcu.
              </Typography>
            </div>
          </div>

          <div className="flex flex-row items-start gap-3.5">
            <div className="pt-2">
              <Image src={GreenTick} alt="" />
            </div>
            <div className="flex-1">
              <Typography
                color="primary"
                weight="semibold"
                className="text-lg lg:text-xl"
              >
                Simpel access to exceptional care
              </Typography>
              <Typography color="body" className="text-sm lg:text-base">
                Risus faucibus sem vel quis in tincidunt. Sit morbi dictum
                cursus malesuada vitae tristique.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainWhyYoloSection.defaultProps = defaultProps;

export default MainWhyYoloSection;
