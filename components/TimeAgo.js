import React from "react";
import TimeAgo from "react-timeago";

const CustomTimeAgo = ({ date }) => (
  <TimeAgo
    date={date}
    formatter={(value, unit, suffix, epochSeconds, nextFormatter) => {
      if (
        unit === "second" ||
        unit === "minute" ||
        unit === "hour" ||
        suffix === "from now"
      ) {
        return "today";
      } else if (unit === "day" && value === 1) {
        return "yesterday";
      } else if (suffix === "from now") {
        return "today";
      } else {
        return nextFormatter();
      }
    }}
  />
);

export default CustomTimeAgo;
