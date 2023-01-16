import Link from "next/link";
import { RxDoubleArrowRight } from "react-icons/rx";


type ReadMoreProps = {
  link: string;
};

export const ReadMore = (props: ReadMoreProps) => {
  const { link } = props;
  return (
    <p className="flex justify-start items-center hover:text-blue-600">
      ReadMore
    </p>
  );
};
