import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

type Props = {
  direction?: 'right' | 'left';
};

export const ArrowButton: React.FC<Props> = ({ direction = 'right' }) => {
  return (
    <button className="flex h-10 w-10 items-center justify-center bg-[#F8FAFC]">
      {direction === 'right' && (
        <BiChevronRight color="#0C4A6E" width={7} height={12} />
      )}
      {direction === 'left' && (
        <BiChevronLeft color="#0C4A6E" width={7} height={12} />
      )}
    </button>
  );
};
