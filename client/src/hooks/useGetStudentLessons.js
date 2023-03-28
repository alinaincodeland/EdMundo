import useSWR from "swr";
import axios from "axios";

const lessonsFetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((res) => res.data);

export const useGetStudentLessons = () =>
  useSWR(
    `${process.env.REACT_APP_BASE_URL}/api/student/lessons`,
      lessonsFetcher,
  );
