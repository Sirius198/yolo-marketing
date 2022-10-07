import Image from 'next/image';
import Typography from '../../typography';

type RowDataType = {
  stepName: string;
  title: string;
  desc: string;
  image: any;
};

type SectionTemplate2Props = {
  title?: string;
  subtitle?: string;
  data?: RowDataType[];
  startOrder?: 'left' | 'right';
};

const defaultProps: SectionTemplate2Props = {
  startOrder: 'left',
};

const SectionTemplate2: React.FC<SectionTemplate2Props> = ({
  title,
  subtitle,
  data: pageData,
  startOrder,
}) => {
  return (
    <section className="w-full py-8 lg:py-[100px]">
      <Typography
        weight={700}
        className="w-full text-center text-[30px] leading-[37.5px] lg:text-5xl lg:leading-[60px]"
      >
        {title}
      </Typography>

      <Typography className="mt-4 mb-[48px] text-center text-sm leading-6 lg:mt-6 lg:mb-[100px] lg:text-lg lg:leading-[34px]">
        {subtitle}
      </Typography>

      {pageData?.map(({ stepName, title, desc, image }, index) => (
        <div
          key={index}
          className={`
          mx-auto mb-[48px] flex w-full flex-col lg:mb-[100px]
          lg:max-w-[1080px]
          lg:gap-[100px] ${
            Boolean(index % 2 == 0) != Boolean(startOrder == 'left')
              ? 'lg:flex-row-reverse'
              : 'lg:flex-row'
          }
          `}
        >
          <div className="flex-1a">
            <div className="lg:max-w-[420px]">
              <Image src={image} alt="" />
            </div>
          </div>

          <div className="flex-1a lg:max-w-[540px]">
            <Typography
              weight={500}
              className="mb-2 mt-6 text-sm leading-[17.5px] text-[#0AC5B3] lg:mb-6 lg:mt-0 lg:text-base lg:leading-5"
            >
              {stepName}
            </Typography>

            <Typography
              weight={700}
              className="mb-2 text-2xl leading-[36px] lg:mb-6 lg:text-4xl lg:leading-[46px]"
            >
              {title}
            </Typography>

            <Typography
              color="body"
              weight={400}
              className="text-[13px] leading-5 tracking-[1%] lg:text-base lg:leading-[30px]"
            >
              {desc}
            </Typography>
          </div>
        </div>
      ))}
    </section>
  );
};

SectionTemplate2.defaultProps = defaultProps;

export default SectionTemplate2;
