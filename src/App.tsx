import React, { useCallback, useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Pagination } from "./components/Pagination/Pagination";
import { ProfileGrid } from "./components/ProfileGrid/ProfileGrid";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { fetchGitProfiles } from "./service/gitservice";
import { debounce } from "lodash";
import Skeleton from "react-loading-skeleton";

function App() {
  const [query, setQuery] = useState("a");
  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCounts, setTotalCounts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 8;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setQuery(e.target.value);
      return;
    }
    setQuery("a");
    setPage(1)
  };

  const loadGitProfiles = useCallback(async (q, p) => {
    setIsLoading(true);
    const response = await fetchGitProfiles({
      query: q,
      page: p,
      per_page: pageSize,
    });
    setTotalCounts(response?.data?.total_count);
    setProfiles(response?.data?.items);
    setIsLoading(false);
  }, []);

  const debouncedSearch = React.useRef(
    debounce(async (q, p) => {
      loadGitProfiles(q, p);
    }, 500)
  ).current;

  useEffect(() => {
    debouncedSearch(query, page);
  }, [debouncedSearch, query, page]);

  const handlePageChange = (page: { selected: number }) => {
    setPage(page?.selected + 1);
  };

  return (
    <div className="relative font-serif">
      <Header />
      <div className="p-6 xl:px-12">
        <div className="flex justify-center">
          <SearchInput onChange={handleChange} />
        </div>

        {isLoading ? (
          <Skeleton
            inline
            count={8}
            className="border p-4 rounded-lg shadow-md flex flex-col items-center h-[244px]"
            containerClassName="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6"
          />
        ) : (
          <ProfileGrid profiles={profiles} />
        )}

        <div className="flex justify-center">
          {!isLoading && totalCounts > 0 && (
            <Pagination
              pageSize={pageSize}
              currentPage={page}
              handlePageChange={handlePageChange}
              totalCounts={totalCounts}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
