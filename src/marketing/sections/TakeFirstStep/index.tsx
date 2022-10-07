import Image from 'next/image';
import GirlImage from '../../assets/images/girl_2.png';
import Typography from 'src/marketing/components/typography';
import Button from 'src/marketing/components/button';

export type TakeFirstStepSectionProps = {};
const defaultProps: TakeFirstStepSectionProps = {};

const TakeFirstStepSection: React.FC<TakeFirstStepSectionProps> = () => {
  return (
    <section className="w-full bg-[#FEF2F2] px-6 pt-5">
      <div className="mx-auto flex flex-col-reverse lg:max-w-[1080px] lg:flex-row">
        <div className="flex-1 lg:-mt-[70px]">
          <Image src={GirlImage} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex flex-col items-center">
            <Typography
              weight={700}
              className="text-center text-3xl leading-[37.5px] lg:text-5xl lg:leading-[60px]"
            >
              “Take the first step today”
            </Typography>
            <Typography className="mt-2 mb-4 text-sm leading-6 lg:mt-6 lg:mb-8 lg:text-lg lg:leading-[34px]">
              Start the journey to hope
            </Typography>

            <div className="mb-6 text-center">
              <Button>Join Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TakeFirstStepSection.defaultProps = defaultProps;

export default TakeFirstStepSection;
