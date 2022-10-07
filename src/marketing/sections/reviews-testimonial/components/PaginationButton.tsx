import classNames from "classnames";
import Typography from "src/marketing/components/typography";

type Props = {
  active?: boolean;
  page?: number;
}

const defaultProps: Props = {
  active: false,
  page: 1
}

export const PaginationButton: React.FC<Props> = ({ active, page }) => {

  const classname = classNames(
    { 'bg-[#2DD4BF]': active },
    { 'border-2 border-[#0C4A6E]': !active }
  )

  return (
    <button className={`w-[42px] h-[44px] rounded-full ${classname}`}>
      <Typography className="text-sm leading-[22.48px]">{page}</Typography>
    </button>
  )
};

PaginationButton.defaultProps = defaultProps