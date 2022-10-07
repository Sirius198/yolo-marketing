import Image from "next/image";
import Button from "src/marketing/components/button";
import Typography from "src/marketing/components/typography";
import Image1 from '../../assets/images/squad/about1.svg'
import Image2 from '../../assets/images/squad/about2.svg'
import Image3 from '../../assets/images/squad/about3.svg'

export type SquadAboutSectionProps = {};
const defaultProps: SquadAboutSectionProps = {};

const pageData = {
  boxes: [
    {
      icon: Image1,
      title: 'Create a squad',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      color: '#F0F9FF'
    },
    {
      icon: Image2,
      title: 'Support each other',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      color: '#FEF2F2'
    },
    {
      icon: Image3,
      title: 'Make a meet up',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      color: '#FFF7ED'
    }
  ]
}

const SquadAboutSection: React.FC<
  SquadAboutSectionProps
> = () => {
  return (
    <section
      className="px-6 py-12 lg:px-0 lg:py-[100px]"
    >
      <div className="w-full lg:max-w-[1080px] mx-auto">

        <Typography variant="header" weight={700}>About The Squad</Typography>

        <Typography
          color="body"
          className="text-center text-sm leading-[24px] font-medium lg:text-lg lg:leading-[34px] lg:font-normal mb-12 lg:mb-[100px]"
        >
          The Squad is a gathering of people facing common issues to share what’s troubling them. Through the sharing of experiences, they’re able to offer support, encouragement, and comfort to the other group members, and receive the same in return.
          <br /><br />
          When you’re going through a challenging or traumatic time, family members and friends may sympathize, but they don’t always know what to say or the best ways to help. Doctors and health professionals may sometimes offer minor emotional support, but their primary focus is always medical.
        </Typography>

        <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 items-center">
          {pageData.boxes.map(({ icon, title, desc, color }, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color
              }}
              className="max-w-[340px] py-6 lg:py-[50px] px-6 lg:px-[15px] flex flex-col items-center"
            >
              <Image src={icon} alt="" />

              <Typography weight={600} className="text-base leading-5 lg:text-[24px] lg:leading-[34px] mb-4 mt-4 lg:mt-[30px]">{title}</Typography>

              <Typography color="body" className="text-sm leading-6 lg:text-base lg:leading-[30px] text-center">{desc}</Typography>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 lg:mt-[100px]">
          <Button>JOIN THE SQUAD</Button>
        </div>
      </div>
    </section>
  )
};

SquadAboutSection.defaultProps = defaultProps;

export default SquadAboutSection;
