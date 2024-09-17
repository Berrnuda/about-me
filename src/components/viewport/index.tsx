import axios from "axios";
import { useEffect, useState } from "react";

type VisitCount = {
  total: number;
  today: number;
};

interface ViewPortProps {
  initialVisitCount: VisitCount;
}

export default function ViewPort({ initialVisitCount }: ViewPortProps) {
  const [visitCount, setVisitCount] = useState<VisitCount>(initialVisitCount);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const todayDate = new Date();
    todayDate.setUTCHours(0, 0, 0, 0);
    const todayString = todayDate.toISOString().split("T")[0];

    const lastVisitDate = localStorage.getItem("lastVisitDate");

    if (lastVisitDate !== todayString) {
      setLoading(true);
      axios
        .post("/api/visit")
        .then((response) => {
          const { total, today } = response.data;
          setVisitCount({ total, today });
          localStorage.setItem("lastVisitDate", todayString);
          setLoading(false);
        })
        .catch((err) => {
          console.error("방문자 수 API 호출 실패:", err);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div>
      <p>전체 방문자 수: {visitCount.total}</p>
      <p>오늘 방문자 수: {visitCount.today}</p>
    </div>
  );
}
