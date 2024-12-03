import { format } from "date-fns";

export function useDateFormatter() {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  };
  return { formatDate };
}
