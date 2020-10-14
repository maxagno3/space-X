import React from "react";
import moment from "moment";

export const getSearchTerm = (startDate, endDate) => {
  let searchTerm = [];
  if (startDate) {
    startDate = moment(startDate).format("YYYY-MM-DD");
    searchTerm.push(`start=${startDate}`);
    if (!endDate) {
      searchTerm.push(`end=2029-01-01`);
    }
  }
  if (endDate) {
    endDate = moment(endDate).format("YYYY-MM-DD");
    searchTerm.push(`end=${endDate}`);
    if (!startDate) {
      searchTerm.push(`start=2002-06-24&`);
    }
  }
  return searchTerm
};
