import { formatDistanceToNow } from "date-fns";

const ReturnDatePeriod = (date: string | Date): string => {
  return formatDistanceToNow(new Date(date), { includeSeconds: true });
};

export default ReturnDatePeriod;
