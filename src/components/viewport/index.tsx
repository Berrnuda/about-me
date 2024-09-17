import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

type VisitCount = {
  total: number;
  today: number;
};

const fetchVisitCount = async () => {
  const { data } = await axios.get("/api/visit");
  return data;
};

const postVisitCount = async () => {
  const { data } = await axios.post("/api/visit");
  return data;
};

export default function ViewPort() {
  const queryClient = useQueryClient();

  // 방문자 수 GET 요청
  const { data: visitCount } = useQuery<VisitCount>({
    queryKey: ["visitCount"],
    queryFn: () => fetchVisitCount(),
    staleTime: Infinity,
  });

  // 방문자 수 POST 요청 (방문자 수 증가)
  const mutation = useMutation({
    mutationFn: () => postVisitCount(),
    onMutate: async (data) => {
      await queryClient.setQueryData(["visitCount"], data);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["visitCount"],
      });
    },
  });

  useEffect(() => {
    const todayDate = new Date();
    todayDate.setUTCHours(0, 0, 0, 0);
    const todayString = todayDate.toISOString().split("T")[0];

    const lastVisitDate = localStorage.getItem("lastVisitDate");

    if (lastVisitDate !== todayString) {
      // 방문자 수를 증가시키고 로컬스토리지에 날짜 저장
      mutation.mutate();
      localStorage.setItem("lastVisitDate", todayString);
    }
  }, [mutation]);

  return (
    <div className="mb-60">
      <p>전체 방문자 수: {visitCount?.total ?? 0}</p>
      <p>오늘 방문자 수: {visitCount?.today ?? 0}</p>
    </div>
  );
}
