import Image from "next/image";
import Button from "../../button";
import Typography from "../../typography";
import StarImage from '../../../assets/icons/star.svg'
import GirlImage from '../../../assets/images/girl_with_brown_clothes.png'

type SectionTemplate1Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  rating?: number;
  background?: string;
};

const defaultProps: SectionTemplate1Props = {
  title: 'Weight Loss Based On Biology',
  subtitle: 'Based on definite knowledge by the experts',
  description:
    '&quot;Needless to say we are extremely satisfied with the results. It&apos;s exactly what I&apos;ve been looking for. The very best. Best. Product. Ever!&quot;',
  rating: 4.8,
  background: '#FFF7ED',
};

const SectionTemplate1: React.FC<SectionTemplate1Props> = ({ title, subtitle, description, rating, background }) => {
  return (
    <section
      className="w-full lg:border-bl-[200px] p-6 lg:pt-[78px]"
      style={{
        background
      }}
    >
      <div className="relative flex flex-col lg:flex-row lg:max-w-[1080px] mx-auto">

        <div className="flex-1">
          <Typography weight={700} className="text-4xl leading-[46px] lg:text-7xl lg:leading-[82px]">
            {title}
          </Typography>
          <Typography
            color="body"
            weight={400}
            className="my-6 text-sm leading-6 lg:my-10 lg:text-lg lg:leading-9"
          >
            {subtitle}
          </Typography>

          <Button>Get Started</Button>
        </div>

        <div className="flex-1">
          <div className="bg-[#CCFBF1] p-6 lg:p-10 lg:max-w-[380px] mb-4 lg:mb-[50px] rounded-1 lg:rounded-[30px]">
            <Typography
              weight={700}
              className="text-xs leading-[18px] leading-[30px] lg:text-base"
            >
              {description}
              <br />
              <br />- Marabel S.
            </Typography>
          </div>

          <div className="flex flex-col items-center lg:max-w-[380px]">
            <div className="flex flex-row gap-[13px]">
              {[1, 2, 3, 4].map(index => (
                <Image key={index} src={StarImage} alt="a" width={10} height={10} style={{ width: 20, height: 20 }} />
              ))}
            </div>
            <Typography
              color="body"
              weight={600}
              className="text-[10px] leading-[12.5px] lg:text-xs lg:leading-[18px]"
            >
              {rating} average rating
            </Typography>
          </div>

        </div>

        <div className="absolute bottom-0 right-0">
          <Image src={GirlImage} alt="Girl" />
        </div>

      </div>
    </section>
  );
};

SectionTemplate1.defaultProps = defaultProps;

export default SectionTemplate1;
