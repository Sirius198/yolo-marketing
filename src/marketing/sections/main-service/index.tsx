import Image from 'next/image';
import Icon1 from '../../assets/images/service/1.svg';
import Icon2 from '../../assets/images/service/2.svg';
import Icon3 from '../../assets/images/service/3.svg';
import Typography from 'src/marketing/components/typography';
import Button from 'src/marketing/components/button';

export type MainServiceSectionProps = {};
const defaultProps: MainServiceSectionProps = {};

const pageData = [
  {
    icon: Icon1,
    title: 'Weight Loss',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    bgColor: '#F0F9FF',
  },
  {
    icon: Icon2,
    title: 'Hair Fall',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    bgColor: '#FEF2F2',
  },
  {
    icon: Icon3,
    title: 'Back Pain',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    bgColor: '#FFF7ED',
  },
];

const MainServiceSection: React.FC<MainServiceSectionProps> = () => {
  return (
    <section className="w-full py-10 lg:py-[100px]">
      <Typography
        weight={700}
        className="mb-6 text-center text-3xl lg:text-5xl"
      >
        Our Services
      </Typography>
      <Typography
        color="body"
        className="mb-8 text-center text-sm lg:mb-[100px] lg:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <div className="mx-auto flex max-w-[340px] flex-col gap-5 lg:max-w-[1000px] lg:flex-row lg:justify-between">
        {pageData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item.bgColor,
            }}
            className="flex flex-col items-center rounded-[32px] px-6 py-6 lg:px-[15px] lg:py-[50px]"
          >
            <Image src={item.icon} alt="" />
            <Typography
              weight={700}
              className="mt-6 mb-4 text-xl lg:mt-[30px] lg:text-2xl"
            >
              {item.title}
            </Typography>
            <Typography
              color="body"
              className="text-center text-sm lg:text-base"
            >
              {item.description}
            </Typography>
          </div>
        ))}
      </div>

      <div className="mt-[100px] flex items-center justify-center">
        <Button variant="secondary">Get Started</Button>
      </div>
    </section>
  );
};

MainServiceSection.defaultProps = defaultProps;

export default MainServiceSection;
