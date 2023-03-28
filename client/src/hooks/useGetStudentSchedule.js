import useSWR from "swr";
import axios from "axios";

const sessionsFetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((res) => res.data);

export const useGetStudentSchedule = () =>
  useSWR(
    `${process.env.REACT_APP_BASE_URL}/api/student/sessions`,
    sessionsFetcher,
  );
