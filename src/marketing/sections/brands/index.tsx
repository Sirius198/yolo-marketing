import Image from 'next/image';

import Brand1 from '../../assets/images/brand/cnn.svg';
import Brand2 from '../../assets/images/brand/buzzfeed.svg';
import Brand3 from '../../assets/images/brand/fox.svg';
import Brand4 from '../../assets/images/brand/businessinsider.svg';
import Brand5 from '../../assets/images/brand/nbc.svg';
import Brand6 from '../../assets/images/brand/forbez.svg';

export type BrandSectionProps = {};
const defaultProps: BrandSectionProps = {};

const PageData = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];

const BrandSection: React.FC<BrandSectionProps> = () => {
  return (
    <section className="w-full">
      <div className="w-full lg:h-[250px]">
        <div className="flex w-full flex-row flex-wrap items-center justify-between">
          {PageData.map((item, index) => (
            <Image
              key={index}
              src={item}
              className="max-h-[32px]"
              alt=""
            />
          ))}
        </div>

        {/* <div className="hidden lg:flex w-full flex flex-row justify-between items-center">
          {PageData.map((item, index) => (
            <Image key={index} src={item} />
          ))}
        </div>

        <div className="lg:hidden">
          <div className="flex flex-row justify-between w-full gap-5 max-h-[14px] mb-[60px]">
            {PageData.slice(0, 3).map((item, index) => (
              <Image key={index} src={item} />
            ))}
          </div>
          <div className="flex flex-row justify-between w-full gap-5 max-h-6">
            {PageData.slice(3, 6).map((item, index) => (
              <Image key={index} src={item} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

BrandSection.defaultProps = defaultProps;

export default BrandSection;
