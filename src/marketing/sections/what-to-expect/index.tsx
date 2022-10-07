import GreenTick from '../../assets/images/greenTick.svg'
import TimelineDot from '../../assets/icons/timeline-dot.svg'
import Typography from 'src/marketing/components/typography';
import Image from 'next/image';

export type WhatToExpectSectionProps = {};
const defaultProps: WhatToExpectSectionProps = {};

const WhatToExpectSection: React.FC<
  WhatToExpectSectionProps
> = () => {
  const pageData = {
    content: [
      {
        period: '0-3 Months',
        level: 'Level 1 - Learning',
        title: 'Learn and put into practice the foundations of metabolic health',
        desc: 'In the first three months, you’ll meet with a member of your coaching team every other week and set bi-weekly goals. You’ll also read 1-2 lessons per week that will help you understand and make the changes that will set the groundwork for your metabolic reset.'
      },
      {
        period: '3-6 Months',
        level: 'Level 2 - Practicing',
        title: 'Build and solidify the habits that work for you',
        desc: 'In months three through six, you’ll continue meeting with a member of your coaching team every other week. You’ll also read about 2 lessons per week, covering skills that build on the fundamentals you learned in Level 1. You’ll have more flexibility as the curriculum becomes more modular and you can choose “focus classes” in areas of your choice.',
      },
      {
        period: '6-9 Months',
        level: 'Level 1 - Setting',
        title: 'Keep refining your habits to fit your day-to-day',
        desc: 'You’ll continue meeting with a member of your coaching team every other week during months six through nine. You’ll also read about 1 to 2 lessons per week and continue to have flexibility around what pillars to work on and when. You can also still choose “focus classes” that let you double down on specific areas that could use more attention.',
      },
      {
        period: '9-12 Months',
        level: 'Level 1 - Substaining',
        title: 'Ensure you’re set up for lasting success',
        desc: 'In the last three months, you’ll still meet with a member of your coaching team every other week and continue to read about 1 to 2 lessons per week. You’ll also continue to have flexibility around what pillars to work on and when. You can also still choose “focus classes” that let you double down on specific areas that could use more attention.',
      },
    ]
  };

  return (
    <section className='w-full bg-[#F8FAFC] py-12 lg:py-[100px] px-6 lg:px-0'>

      <div className="mb-12 lg:mb-[100px]">

        <Typography
          weight={700}
          variant="header"
          className="text-center"
        >
          What to Expect
        </Typography>

        <Typography
          weight={500}
          variant="desc"
          className="text-center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>

      <div className='w-full'>
        {pageData.content.map(({ period, level, title, desc }, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-[60px] mb-8 lg:mb-[50px] lg:max-w-[1080px] mx-auto lg:justify-end"
          >
            <div className='relative flex flex-col lg:flex-row
            w-[calc(100%-50px)] lg:w-auto
            ml-10 lg:ml-0
            items-start lg:items-center
            gap-0 lg:gap-[10px]
            py-[10px] px-4 lg:pr-6 rounded-[32px] bg-[#CCFBF1]'>
              <div className='flex flex-row gap-[10px]'>
                <Image src={GreenTick} alt="" />
                <Typography className='text-sm leading-6 lg:text-base leading-[30px]'>{period}</Typography>
              </div>
              <Typography
                weight={600}
                className="text-base leading-5 lg:text-lg lg:leading-[22.5px] pl-[30px] lg:pl-0"
              >
                {level}
              </Typography>

              <div className='absolute w-6 top-[23px] lg:top-[12px] -left-[50px] lg:left-auto lg:-right-[42px]'>
                <Image src={TimelineDot} alt="" />
              </div>
            </div>

            <div
              className='relative bg-white rounded-2xl p-[30px] lg:max-w-[660px] ml-10 lg:ml-0'
              style={{
                boxShadow: '0px 100px 80px rgba(203, 213, 225, 0.07), 0px 41.7776px 33.4221px rgba(203, 213, 225, 0.0503198), 0px 22.3363px 17.869px rgba(203, 213, 225, 0.0417275), 0px 12.5216px 10.0172px rgba(203, 213, 225, 0.035), 0px 6.6501px 5.32008px rgba(203, 213, 225, 0.0282725), 0px 2.76726px 2.21381px rgba(203, 213, 225, 0.0196802)'
              }}
            >
              <Typography
                weight={600}
                className='text-lg leading-[22px] lg:text-2xl lg:leading-[36px] mb-4 lg:mb-6'
              >
                {title}
              </Typography>

              <Typography
                weight={400}
                className="text-sm lg:text-base leading-6 lg:leading-[30px]"
              >
                {desc}
              </Typography>

              {/* Begin:Lines On Mobile View */}
              {index != pageData.content.length - 1 && <div className="absolute lg:hidden w-[1px] border-r-[1px] border-r-[#0AC5B3] -left-[33px] -top-[25px] -bottom-[50px]">
              </div>}
              {/* End:Lines On Mobile View */}

              {/* Begin:Lines on Desktop View */}
              {index != pageData.content.length - 1 && <div className="absolute hidden lg:block w-[1px] border-r-[1px] border-r-[#0AC5B3] -left-[31px] top-[calc(50%+20px)] -bottom-[25px]">
              </div>}
              {index != 0 && <div className="absolute hidden lg:block w-[1px] border-r-[1px] border-r-[#0AC5B3] -left-[31px] bottom-[calc(50%+20px)] -top-[25px]">
              </div>}
              {/* End:Lines on Desktop View */}

            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

WhatToExpectSection.defaultProps = defaultProps;

export default WhatToExpectSection;
