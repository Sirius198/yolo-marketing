import Typography from 'src/marketing/components/typography';
import Bg from '../../assets/images/squad/sharing.png'

export type SquadSharingSectionProps = {};
const defaultProps: SquadSharingSectionProps = {};

const SquadSharingSection: React.FC<
  SquadSharingSectionProps
> = () => {
  return (
    <section
      className="w-full h-[275px] lg:h-[720px] bg-cover bg-right flex items-center justify-center"
      style={{
        backgroundImage: `url(${Bg.src})`,
      }}
    >
      <Typography weight={700} className='text-center text-[#FFF] text-[48px] leading-[58px] lg:text-[128px] lg:leading-[170px]'>Sharing is Caring</Typography>
    </section>
  )
};

SquadSharingSection.defaultProps = defaultProps;

export default SquadSharingSection;
