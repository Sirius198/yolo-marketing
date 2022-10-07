import Image from 'next/image';
import ArrowSvg from '../../assets/images/howitworks/arrow.svg';
import Typography from 'src/marketing/components/typography';
import { pageData } from './pageData';
import { StepCard } from './components/StepCard';
import Button from '../../components/button';

export type MainHowItWorksSectionProps = {};
const defaultProps: MainHowItWorksSectionProps = {};

const MainHowItWorksSection: React.FC<MainHowItWorksSectionProps> = () => {
  return (
    <section
      className="w-full py-10 md:py-[100px]"
      style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
      }}
    >
      <Typography
        weight={700}
        className="mb-4 text-center text-3xl lg:mb-6 lg:text-5xl"
      >
        How it works
      </Typography>
      <Typography
        color="body"
        className="mb-8 text-center text-sm lg:mb-[100px] lg:text-lg"
      >
        A few easy steps with Yolo Health to increase your income
      </Typography>

      <div className="mx-auto flex w-full max-w-[264px] flex-col items-center justify-between gap-5 lg:max-w-[944px] lg:flex-row lg:gap-1">
        {pageData.map((item, index) => (
          <>
            <StepCard key={index}>
              <Typography
                color="body"
                weight={700}
                className="mb-6 text-2xl"
              >
                {item.order}
              </Typography>
              <div className="h-[72px] w-[72px] lg:h-[100px] lg:w-[100px]">
                <Image src={item.icon} alt="" />
              </div>
              <Typography
                color="primary"
                weight={600}
                className="mt-6 mb-2 text-center text-xl"
              >
                {item.title}
              </Typography>
              <Typography color="body" className="text-center text-sm">
                {item.description}
              </Typography>
            </StepCard>

            {index < 2 && (
              <div className="top-[50%] left-full hidden w-full flex-1 lg:block">
                <Image src={ArrowSvg} alt="" className="" />
              </div>
            )}
          </>
        ))}
      </div>

      <div className="mt-[100px] text-center">
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

MainHowItWorksSection.defaultProps = defaultProps;

export default MainHowItWorksSection;
