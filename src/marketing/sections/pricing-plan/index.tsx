import Image from "next/image";
import Typography from "src/marketing/components/typography";
import Icon from '../../assets/images/service/1.svg';
import GreenTick from '../../assets/images/greenTick.svg';
import Button from "src/marketing/components/button";

export type PricingPlanSectionProps = {};
const defaultProps: PricingPlanSectionProps = {};

const PricingPlanSection: React.FC<
  PricingPlanSectionProps
> = () => {
  const planDesc = [
    {
      title: '12 weeks of dedicated support',
      desc: 'Most people stay with Circles much longer than 12 weeks'
    },
    {
      title: 'The right group for you',
      desc: 'We match you with others in a similar situation'
    },
    {
      title: 'Professionally led',
      desc: 'Each Circle is led by a mental health expert'
    },
    {
      title: 'Available 24/7',
      desc: 'Chat, exercises, and content available 24/7 in addition to your weekly live video session'
    },
  ]

  return (
    <section className="px-6 py-8 lg:px-0 lg:py-[100px]">

      <Typography
        weight={700}
        className="text-[30px] leading-[37.5px] lg:text-[48px] lg:leading-[58px] mb-8 lg:mb-[72px] text-center"
      >
        One simple pricing plan
      </Typography>

      <div className="w-full lg:max-w-[650px] mx-auto px-6 py-8 lg:p-[50px] bg-[#F0FDFA] rounded-[16px]">

        <div className="bg-[#CCFBF1] px-6 py-8 flex flex-col items-center rounded-[12px]">
          <Image src={Icon} alt="" />

          <Typography weight={600} className="text-xl leading-[28px] mb-2 mt-5">Weigth Loss Program</Typography>
          <Typography
            weight={700}
            className="text-[36px] text-[#0AC5B3] leading-[46px] lg:text-[48px] lg:leading-[58px] mb-2"
          >
            <sup>$</sup>99/month
          </Typography>
          <Typography color="body" className="text-xs leading-[18px] lg:text-lg lg:leading-[34px]">No commitment, cancel anytime</Typography>
        </div>

        <div className="mt-8 lg:mt-[50px]">
          {planDesc.map(({ title, desc }, index) => (
            <div
              key={index}
              className="flex flex-row items-start gap-[10px] mb-8"
            >
              <div className="w-[17px] h-[17px] lg:w-[20px] lg:h-[20px]">
                <Image src={GreenTick} alt="" />
              </div>

              <div className="flex-1">
                <Typography className="text-xl leading-[28px] font-semibold lg:text-2xl lg:leading-[36px] lg:font-bold mb-2">{title}</Typography>
                <Typography color="body" className="text-sm leading-[24px] lg:text-lg lg:leading-[34px">{desc}</Typography>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center">
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  )
};

PricingPlanSection.defaultProps = defaultProps;

export default PricingPlanSection;
