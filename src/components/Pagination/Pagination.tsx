import { FC, useEffect, useState } from "react";
import "./Pagination.css";

type PaginationProps = {
  changePage(page: number): void;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  offset: number;
};

const Pagination: FC<PaginationProps> = ({
  changePage,
  currentPage,
  totalPages,
  loading,
  offset,
}) => {
  const [previousPage, setPreviousPage] = useState<number>(1);
  const [nextPage, setNextPage] = useState<number>(1);
  useEffect(() => {
    setNextPage(offset !== totalPages ? offset + 1 : totalPages);
    setPreviousPage(offset !== 1 ? offset - 1 : 1);
  }, [totalPages, offset]);

  return (
    <ul>
      {loading ? (
        <li>
          <span className="interval">...</span>
        </li>
      ) : (
        <>
          {currentPage !== 1 && (
            <>
              <li>
                <button className="arrows" onClick={() => changePage(1)}>
                  &#8810;
                </button>
              </li>
              <li>
                <button
                  className="arrows"
                  onClick={() => changePage(previousPage)}
                >
                  &#60;
                </button>
              </li>
            </>
          )}
          <li>
            <button
              className={`number ${currentPage === 1 ? "active" : ""}`}
              onClick={() => changePage(1)}
            >
              1
            </button>
          </li>

          {previousPage !== 1 && (
            <li>
              <span className="interval">...</span>
            </li>
          )}

          {previousPage !== 1 && (
            <li>
              <button
                className="number"
                onClick={() => changePage(previousPage)}
              >
                {previousPage}
              </button>
            </li>
          )}
          {currentPage !== 1 && currentPage !== totalPages && (
            <li>
              <button
                className="number active"
                onClick={() => changePage(currentPage)}
              >
                {currentPage}
              </button>
            </li>
          )}
          {nextPage !== totalPages && (
            <li>
              <button className="number" onClick={() => changePage(nextPage)}>
                {nextPage}
              </button>
            </li>
          )}
          {nextPage !== totalPages && (
            <li>
              <span className="interval">...</span>
            </li>
          )}
          {totalPages !== 1 && (
            <li>
              <button
                className={`number ${
                  currentPage === totalPages ? "active" : ""
                }`}
                onClick={() => changePage(totalPages)}
              >
                {totalPages}
              </button>
            </li>
          )}
          {currentPage !== totalPages && (
            <>
              <li>
                <button className="arrows" onClick={() => changePage(nextPage)}>
                  &#62;
                </button>
              </li>
              <li>
                <button
                  className="arrows"
                  disabled={currentPage === totalPages}
                  onClick={() => changePage(totalPages)}
                >
                  &#8811;
                </button>
              </li>
            </>
          )}
        </>
      )}
    </ul>
  );
};
export default Pagination;
