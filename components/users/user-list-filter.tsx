import { FilterFn } from "@tanstack/react-table";

export const userListFilterFn: FilterFn<any> = (row, columnId, filterValue) => {
  const searchValue = filterValue.toLowerCase();

  const nameMatch = String(row.getValue("name"))
    .toLowerCase()
    .includes(searchValue);
  const emailMatch = String(row.getValue("email"))
    .toLowerCase()
    .includes(searchValue);

  return nameMatch || emailMatch;
};
