import Image1 from '../../assets/images/dialing.png';
import Image2 from '../../assets/images/medicine.png';
import Image3 from '../../assets/images/laptop.png';
import SectionTemplate2 from 'src/marketing/components/section-base/SectionTemplate2';

export type WeightLossProgramSectionProps = {};
const defaultProps: WeightLossProgramSectionProps = {};

const WeightLossProgramSection: React.FC<
  WeightLossProgramSectionProps
> = () => {
  const pageData = {
    title: 'The Weight Loss Program',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    data: [
      {
        stepName: 'The first step',
        title: 'Evaluation',
        desc: 'Nunc, amet, purus scelerisque in magna nibh commodo. Risus tellus est libero nullam orci sagittis id.',
        image: Image1,
      },
      {
        stepName: 'Second step',
        title: 'Medication',
        desc: 'Justo felis massa nulla aliquet consectetur non turpis consequat. Condimentum quis morbi mauris praesent rhoncus sed sem. Morbi risus non tincidunt diam ullamcorper volutpat, scelerisque.',
        image: Image2,
      },
      {
        stepName: 'Third step',
        title: '1:1 Health coaching',
        desc: 'Convallis diam lacus gravida amet integer dignissim senectus. Urna eu tincidunt pharetra, pharetra cursus molestie. Velit amet, fames semper feugiat eget natoque mauris lectus morbi. Nam consequat pulvinar adipiscing a nunc malesuada metus.',
        image: Image3,
      },
    ],
  };

  return <SectionTemplate2 {...pageData} />;
};

WeightLossProgramSection.defaultProps = defaultProps;

export default WeightLossProgramSection;
