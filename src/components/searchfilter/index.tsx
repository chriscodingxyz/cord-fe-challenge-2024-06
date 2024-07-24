import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilters from "../expandablefilters";
import SearchBar from "../searchbar";
import debounce from "lodash/debounce";

type Genre = {
  id: number;
  name: string;
};

type Rating = {
  id: number;
  name: number;
};

type Language = {
  id: string;
  name: string;
};

type SearchFiltersProps = {
  genres: Genre[];
  ratings: Rating[];
  languages: Language[];
  searchMovies: (keyword: string, year?: number) => void;
};

export default function SearchFilters({
  genres,
  ratings,
  languages,
  searchMovies,
}: SearchFiltersProps) {
  const [keyword, setKeyword] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const debouncedSearch = useCallback(
    debounce((keyword: string, year?: number) => {
      if (keyword.trim() !== "") {
        if (year && !isNaN(year)) {
          searchMovies(keyword, year);
        } else {
          searchMovies(keyword);
        }
      }
    }, 300),
    [searchMovies]
  );

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    debouncedSearch(newKeyword, year.length === 4 ? parseInt(year) : undefined);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = e.target.value;
    setYear(newYear);
    if (newYear.length === 4) {
      debouncedSearch(keyword, parseInt(newYear));
    } else {
      debouncedSearch(keyword);
    }
  };

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          placeholder="Search for movies..."
          value={keyword}
          onChange={handleKeywordChange}
        />
        <SearchBar
          placeholder="Year of release"
          value={year}
          onChange={handleYearChange}
        />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        {/* Implement ExpandableFilters components here */}
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div<{ marginBottom?: boolean }>`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div``;
