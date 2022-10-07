import Image from "next/image";
import Typography from "src/marketing/components/typography";
import SideImg1 from '../../assets/images/squad/sideimg1.png'
import SideImg2 from '../../assets/images/squad/sideimg2.png'
import OverlayImg from '../../assets/images/squad/overlay.png'
import PlayButtonSvg from '../../assets/images/squad/playbutton.svg'

export type SquadContentProps = {};
const defaultProps: SquadContentProps = {};

const pageData = {
  contents: [
    {
      title: 'Why should you join with The Squad',
      desc: 'Fringilla eget molestie neque, et malesuada nulla urna etiam nisi. Id nulla dui tellus, in. Id sit in tincidunt varius faucibus consectetur sagittis ultricies. Aenean dignissim augue vitae ut faucibus nibh amet ut. Massa egestas sit arcu tincidunt posuere commodo nibh vel aliquam. Enim a, at lorem aenean. In condimentum velit risus id pharetra risus, nisl, dictum nibh. ',
      img: SideImg1
    },
    {
      title: 'What are the benefits',
      desc: 'Varius mattis egestas tellus ut eros, urna amet nulla volutpat. Id donec ut lacus eget et ornare pretium. In venenatis pretium sed tortor, nullam integer scelerisque. Tristique consectetur mi tristique tempor, non felis. Massa sed in ut tincidunt sit suscipit fames.',
      img: SideImg2
    }
  ]
}

const SquadContent: React.FC<
  SquadContentProps
> = () => {
  return (
    <section className="w-full px-6 py-12 lg:px-0 lg:py-[100px]">
      <Typography weight={700} variant="header" className="">Give them space to share</Typography>
      <Typography weight={500} variant="desc" className="text-center">
        Share experiences and stories with each other to get motivated to carry out all activities lightly and happily.
      </Typography>

      <div className="w-full lg:max-w-[1080px] mx-auto mt-12">

        {pageData.contents.map(({ title, desc, img }, index) => (
          <div
            key={index}
            className={`mb-[48px] lg:mb-[150px] flex flex-col ${index ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-0 lg:justify-between`}
          >
            <div className="flex-1 flex items-center justify-center lg:max-w-[420px] lg:max-h-[420px]">
              <Image src={img} alt="" className="rounded-lg" />
            </div>

            <div className="flex-1 lg:max-w-[530px]">
              <Typography weight={700} variant="header" style={{ textAlign: 'left' }}>{title}</Typography>
              <Typography
                weight={500}
                color="body"
                variant="desc"
              >
                {desc}
              </Typography>
            </div>
          </div>
        ))}

        <div className="w-full relative">
          <Image src={OverlayImg} alt="" />

          <div className="absolute w-[42px] h-[42px] lg:w-[63px] lg:h-[63px] top-[40%] left-[40%]">
            <Image src={PlayButtonSvg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
};

SquadContent.defaultProps = defaultProps;

export default SquadContent;
