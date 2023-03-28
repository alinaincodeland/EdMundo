import useSWR from "swr";
import axios from "axios";

const lessonsFetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((res) => res.data);

export const useGetTeacherLessons = () =>
  useSWR(
    `${process.env.REACT_APP_BASE_URL}/api/teacher/lessons`,
      lessonsFetcher,
  );
