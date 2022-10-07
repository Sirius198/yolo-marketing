import Image from "next/image";
import Typography from "src/marketing/components/typography";
import ChartImg from '../../assets/images/pricing/Chart.png';

export type PricingRiseSectionProps = {};
const defaultProps: PricingRiseSectionProps = {};

const PricingRiseSection: React.FC<
  PricingRiseSectionProps
> = () => {
  return (
    <section className="w-full px-6 py-6 lg:px-0 lg:py-[100px]">

      <div className="flex flex-col lg:flex-row lg:justify-between mx-auto lg:max-w-[1080px] gap-[48px] lg:gap-0">

        <div className="flex-1 lg:max-w-[440px]">
          <Typography
            weight={700}
            className="text-[30px] leading-[37.5px] lg:text-[48px] lg:leading-[58px] mb-4 lg:mb-6"
          >
            Rise up
          </Typography>
          <Typography
            color="body"
            weight={500}
            className="text-sm leading-[24px] lg:text-lg lg:leading-[30px] mb-6 lg:mb-10"
          >
            Consectetur neque adipiscing porttitor feugiat adipiscing et maecenas amet blandit.
          </Typography>
          <Typography
            color="body"
            className="text-sm leading-[24px] lg:text-base lg:leading-[30px]"
          >
            Enim eleifend dignissim vitae libero lacinia odio amet. Risus, donec justo, sit arcu at purus. Et vitae in pharetra, elementum aliquam phasellus arcu in. Etiam volutpat volutpat arcu tempus.
          </Typography>
        </div>

        <div className="flex-1">
          <div className="lg:max-w-[530px] lg:ml-auto">
            <Image src={ChartImg} alt="" />
          </div>
        </div>

      </div>
    </section>
  )
};

PricingRiseSection.defaultProps = defaultProps;

export default PricingRiseSection;
