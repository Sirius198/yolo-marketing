import Image from 'next/image';
import Typography from 'src/marketing/components/typography';
import Button from 'src/marketing/components/button';
import SectionTemplate1 from 'src/marketing/components/section-base/SectionTemplate1';

export type HiwHeroSectionProps = {};
const defaultProps: HiwHeroSectionProps = {};

const HiwHeroSection: React.FC<HiwHeroSectionProps> = () => {
  const pageData = {
    title: 'Weight Loss Based On Biology',
    subtitle: 'Based on definite knowledge by the experts',
    description:
      '"Needless to say we are extremely satisfied with the results. It\'s exactly what I\'ve been looking for. The very best. Best. Product. Ever!"',
    rating: 4.8,
    background: '#FFF7ED',
  }

  return (
    <SectionTemplate1 {...pageData} />
  )
};

HiwHeroSection.defaultProps = defaultProps;

export default HiwHeroSection;
