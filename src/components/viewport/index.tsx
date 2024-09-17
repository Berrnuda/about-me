import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewPort() {
  const [visitCount, setVisitCount] = useState<{ total: number; today: number }>({
    total: 0,
    today: 0,
  });

  useEffect(() => {
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0); // 오늘의 날짜 (시간 00:00:00으로 설정)
    const todayString = todayDate.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 변환

    // 로컬 스토리지에서 마지막 방문 날짜 확인
    const lastVisitDate = localStorage.getItem("lastVisitDate");

    if (lastVisitDate !== todayString) {
      // 방문자 수 증가시키고 전체 및 오늘 방문자 수 조회하기
      axios
        .post("/api/visit") // 방문자 수 증가 요청
        .then((response) => {
          const { total, today } = response.data;
          setVisitCount({ total, today }); // 서버에서 받은 total과 today 값을 설정
          localStorage.setItem("lastVisitDate", todayString); // 오늘 방문 기록을 로컬 스토리지에 저장
        })
        .catch((err) => {
          console.error("방문자 수 API 호출 실패:", err);
        });
    } else {
      // 이미 방문한 경우에는 방문자 수 조회만 수행
      axios
        .get("/api/visit")
        .then((response) => {
          const { total, today } = response.data;
          setVisitCount({ total, today });
        })
        .catch((err) => {
          console.error("방문자 수 조회 실패:", err);
        });
    }
  }, []);

  return (
    <div>
      <p>전체 방문자 수: {visitCount.total}</p>
      <p>오늘 방문자 수: {visitCount.today}</p>
    </div>
  );
}
