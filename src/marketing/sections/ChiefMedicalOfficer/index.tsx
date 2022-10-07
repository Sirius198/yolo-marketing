import Image from 'next/image';
import Typography from 'src/marketing/components/typography';
import Photo from '../../assets/images/chief_medical_officer.png'
import QuotationSvg from '../../assets/icons/quotation_green.svg'

export type ChiefMedicalOfficerSectionProps = {};
const defaultProps: ChiefMedicalOfficerSectionProps = {};

const ChiefMedicalOfficerSection: React.FC<
  ChiefMedicalOfficerSectionProps
> = () => {
  const pageData = {
    text: 'Calibrate’s Metabolic Reset is built on decades of research that shows incremental habit change through intensive lifestyle intervention, in combination with medication that works on underlying biology, is the most effective approach for sustained weight loss and improved metabolic health.',
    name: 'Jessica Patterson',
    role: 'Chief Medical Officer'
  }

  return (
    <section className='px-6 py-8 lg:px-0 lg:py-[60px]'>
      <div className='flex flex-col lg:flex-row mx-auto w-full lg:max-w-[1080px] gap-8 lg:gap-0 border-y-[1px] border-y-[#E2E8F0] py-8 lg:py-[75px]'>

        <div className='flex-1 px-9 lg:px-0'>
          <Image src={Photo} alt="" />
        </div>

        <div className='flex-1'>
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

ChiefMedicalOfficerSection.defaultProps = defaultProps;

export default ChiefMedicalOfficerSection;
