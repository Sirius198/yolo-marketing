import Typography from 'src/marketing/components/typography';
import BgImg from '../../assets/images/squad/squad_bg.png'

export type SquadHeroSectionProps = {};
const defaultProps: SquadHeroSectionProps = {};

const SquadHeroSection: React.FC<
  SquadHeroSectionProps
> = () => {
  return (
    <section
      className='w-full h-[315px] lg:h-[100vh] lg:min-h-[1024px] rounded-bl-[50px] lg:rounded-bl-[200px]'
      style={{
        backgroundImage: `url(${BgImg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      }}
    >
      <div className='w-full max-w-[310px] lg:max-w-[815px] mx-auto'>
        <Typography
          className='text-center text-xs leading-[15px] lg:text-[30px] lg:leading-[37.5px] mt-[35px] lg:mt-[70px] tracking-[0.9em]'
        >
          Welcome to
        </Typography>
        <Typography className='text-center uppercase font-extrabold text-[50px] leading-[62.5px] lg:text-[132px] lg:leading-[165px] text-[#0AC5B3]'>The Squad</Typography>

        <Typography className='text-center text-xs leading-[18px] lg:text-2xl lg:leading-[40px]'>
          <strong>Yolo Health’s The Squad</strong> is a gathering of people facing common issues to share what’s troubling them.
        </Typography>
      </div>
    </section>
  )
};

SquadHeroSection.defaultProps = defaultProps;

export default SquadHeroSection;
