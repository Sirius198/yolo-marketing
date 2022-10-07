import Image from 'next/image';
import GreenTick from '../../assets/images/greenTick.svg';
import QuotationSvg from '../../assets/images/quotation.svg';
import Typography from 'src/marketing/components/typography';
import { pageData } from './pageData';
import { ArrowButton } from 'src/marketing/components/button/ArrowButton';
import Button from 'src/marketing/components/button';

export type TestimonialSectionProps = {};
const defaultProps: TestimonialSectionProps = {};

const TestimonialSection: React.FC<TestimonialSectionProps> = () => {
  return (
    <section
      className="w-full"
      style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
      }}
    >
      <Typography
        weight={700}
        className="mx-auto mt-[100px] mb-[34px] max-w-[750px] text-center text-3xl leading-[37.5px]
        lg:mb-[70px] lg:text-5xl lg:leading-[60px]"
      >
        Success stories from our beloved members
      </Typography>

      <div className="mx-auto flex w-full flex-col lg:flex-row">
        <div className="z-20 flex flex-1 flex-row items-start justify-center gap-5 lg:justify-end lg:pt-[95px]">
          <div className="relative">
            <Image src={pageData[0].photo} className="rounded-lg" alt="" />

            <div className="absolute right-[105%] top-0 h-[240px] w-[175px]">
              <Image
                src={pageData[0].photo}
                className="rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className="z-20 -mt-10
          flex-1 rounded-bl-[100px] px-6 py-5 lg:z-10 lg:-ml-[100px]
          lg:mt-0 lg:pl-[200px] lg:pt-[100px] lg:pb-[100px]"
          style={{
            background:
              'linear-gradient(227.93deg, #5EEAD4 -55.95%, #CCFBF1 100%)',
          }}
        >
          <div className="lg:max-w-[500px]">
            <Image src={QuotationSvg} alt="" />

            <Typography className="my-[30px] text-lg leading-[34px] lg:text-2xl lg:leading-10">
              {pageData[0].review}
            </Typography>
            <Typography
              weight={600}
              className="mb-1.5 text-base lg:text-xl"
            >
              {pageData[0].name}
            </Typography>
            <Typography className="text-xs lg:text-[15px]">
              {pageData[0].role}
            </Typography>
          </div>

          <div className="flex flex-row justify-end gap-0.5 text-right">
            <ArrowButton direction="left" />{' '}
            <ArrowButton direction="right" />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-[46px] lg:py-[112px]">
        <Button>All Reviews</Button>
      </div>
    </section>
  );
};

TestimonialSection.defaultProps = defaultProps;

export default TestimonialSection;
