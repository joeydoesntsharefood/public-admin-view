import { useLocation } from "react-use";

export const useQuery = (key: string) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  return query.get(key)
}