import Image from "next/image";
import Typography from "src/marketing/components/typography";
import Photo from '../../assets/images/squad/member.png'
import QuotationSvg from '../../assets/icons/quotation_green.svg'

export type SquadQuoteSectionProps = {};
const defaultProps: SquadQuoteSectionProps = {};

const SquadQuoteSection: React.FC<
  SquadQuoteSectionProps
> = () => {

  const pageData = {
    text: '\"I remember being a Yolo Health member for the first time. I am very well understood by those who are experts in their fields and I am also very happy to have found a group of people who have motivated me to run this program. It\'s good to be here. Like having a new family.\"',
    name: 'Jessica Patterson',
    role: 'Sales Manager'
  }

  return (
    <section className='w-full px-6 py-8 lg:px-0 lg:py-[60px] bg-[#F0FDFA] rounded-br-[100px] lg:rounded-br-[200px]'>
      <div className='flex flex-col lg:flex-row-reverse mx-auto w-full lg:max-w-[1080px] gap-8 lg:gap-0'>

        <div className='flex-1 px-9 lg:px-0 flex justify-center lg:justify-end'>
          <Image src={Photo} alt="" className="rounded-lg ml-auto" />
        </div>

        <div className='flex-1 lg:max-w-[530px]'>
          <Image src={QuotationSvg} alt="" />

          <Typography className='font-bold lg:font-normal text-sm leading-[28px] lg:text-lg lg:leading-[34px] mt-[30px]'>
            {pageData.text}
          </Typography>

          <Typography weight={600} className='text-base leading-5 lg:text-lg lg:leading-[22.5px] mt-[30px]'>
            {pageData.name}
          </Typography>

          <Typography className='text-xs leading-[18px] lg:text-sm lg:leading-6 text-[#0AC5B3] lg:font-medium mt-1.5'>
            {pageData.role}
          </Typography>
        </div>
      </div>
    </section>
  )
};

SquadQuoteSection.defaultProps = defaultProps;

export default SquadQuoteSection;
