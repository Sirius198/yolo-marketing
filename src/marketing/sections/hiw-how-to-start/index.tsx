import Image1 from '../../assets/images/doctor_at_pc.png';
import Image2 from '../../assets/images/doctor_in_phone2.png';
import Image3 from '../../assets/images/fruits.png';
import Image4 from '../../assets/images/girl_on_weighing.png';
import SectionTemplate2 from 'src/marketing/components/section-base/SectionTemplate2';

export type HiwHowToStartSectionProps = {};
const defaultProps: HiwHowToStartSectionProps = {};

const HiwHowToStartSection: React.FC<HiwHowToStartSectionProps> = () => {
  const pageData = {
    title: 'How to start with Yolo Health',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    data: [
      {
        stepName: 'The first step',
        title: 'Discussion Session',
        desc: 'Faucibus scelerisque massa lacus senectus porta dolor eu nulla. Suspendisse tellus vitae libero egestas turpis iaculis. Venenatis odio molestie non ultrices interdum leo.',
        image: Image1,
      },
      {
        stepName: 'Second step',
        title: 'Weekly Video Coaching',
        desc: 'Posuere vitae aenean convallis tempor. Amet augue dis congue semper pellentesque duis scelerisque in. Nulla vel habitant enim tellus tortor id.',
        image: Image2,
      },
      {
        stepName: 'Third step',
        title: 'Holistic Curriculum',
        desc: 'Aliquet aliquam risus consequat ullamcorper est, quam. Massa aenean cras diam elit mauris rutrum ridiculus tempor enim. Quisque mi lectus nunc quis.',
        image: Image3,
      },
      {
        stepName: 'Last step',
        title: 'Get the result',
        desc: 'Nulla at adipiscing nec fusce mattis at. Nunc venenatis in et orci metus. Suspendisse vitae est posuere augue commodo viverra adipiscing interdum.',
        image: Image4,
      },
    ],
  };

  return <SectionTemplate2 {...pageData} />;
};

HiwHowToStartSection.defaultProps = defaultProps;

export default HiwHowToStartSection;
