import { FC } from "react";
import ReactPaginate from "react-paginate";
import CaretForward from "../../assets/caret-forward.svg";
import CaretBack from "../../assets/caret-back.svg";
import "./pagination.css";
type Props = {
  pageSize: number;
  totalCounts: number;
  handlePageChange: any;
  currentPage: number;
};

export const Pagination: FC<Props> = ({
  pageSize,
  totalCounts,
  handlePageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(totalCounts / pageSize);
  return (
    <div className="w-full md:w-60 flex justify-center">
      <ReactPaginate
        forcePage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName="paginate"
        previousLabel={
          <img
            className="w-5 h-5"
            src={CaretBack}
            alt="back"
          />
        }
        nextLabel={
          <img
            className="w-5 h-5"
            src={CaretForward}
            alt="next"
          />
        }
        disabledClassName="paginate__link--disabled"
        activeClassName="paginate__link--active"
        nextLinkClassName="bg-none"
        previousLinkClassName="bg-none"
      />
    </div>
  );
};
