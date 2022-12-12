import queryString from "query-string";
import { searchOption } from "./literal"


interface QueryStringValues extends queryString.ParsedQuery<string> {
    searchOption: searchOption;
    searchValue: string;
}

export { QueryStringValues }