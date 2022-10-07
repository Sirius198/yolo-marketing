import Image from "next/image";
import Typography from "src/marketing/components/typography";
import GreenTick from '../../assets/images/greenTick.svg';
import { PaginationButton } from "./components/PaginationButton";
import { pageData } from "./pageData";

export type ReviewsTestimonialSectionProps = {};
const defaultProps: ReviewsTestimonialSectionProps = {};

const ReviewsTestimonialSection: React.FC<
  ReviewsTestimonialSectionProps
> = () => {

  const data = pageData.testimonials

  return (
    <section className="w-full py-8 lg:py-[100px]">
      <div className="w-full lg:max-w-[1080px] mx-auto px-6 lg:px-0">

        <Typography color="body" className="text-right mb-8 lg:mb-[50px] text-xs leading-[18px] lg:text-sm lg:leading-6">1590 Total testimonials</Typography>

        {data.map(({ avatar, name, verified, title, text }, index) => (
          <div
            key={index}
            className="w-full py-[50px] border-t-[1px] border-t-[#E2E8F0] flex flex-col lg:flex-row gap-8 lg:gap-0 items-start"
            style={{
              borderBottom: index == data.length - 1 ? '1px solid #E2E8F0' : '0'
            }}
          >

            <div className="flex-1 flex flex-row gap-6 items-center">
              <div className="">
                <Image src={avatar} alt="" className="rounded-full" />
              </div>
              <div>
                <div className="flex flex-row gap-[10px]">
                  <Typography weight={600} className="text-lg leading-[22.5px]">{name}</Typography>
                  <div className="w-[18.33px] h-[18.33px]"><Image src={GreenTick} alt="" /></div>
                </div>
                <Typography className="text-sm leading-6 mt-1.5">{verified ? 'Verified Customer' : 'Not Verified'}</Typography>
              </div>
            </div>

            <div className="flex-1">
              <Typography weight={600} className="text-xl leading-[28px] mb-4 lg:text-2xl lg:leading-[36px] lg:mb-6">{title}</Typography>

              <Typography weight={500} className="text-sm leading-6 lg:text-base leading-[30px]">{text}</Typography>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex flex-row gap-[10px] justify-center mt-8 lg:mt-[50px]">
          {[1, 2, 3, 4].map(p => (
            <PaginationButton active={p == 1} page={p} />
          ))}
        </div>
      </div>
    </section>
  )
};

ReviewsTestimonialSection.defaultProps = defaultProps;

export default ReviewsTestimonialSection;
