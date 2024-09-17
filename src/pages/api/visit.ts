import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../utils/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("ViewPort");

    const collection = db.collection("visits");

    // UTC 기준으로 오늘 날짜 설정
    const todayDate = new Date();
    todayDate.setUTCHours(0, 0, 0, 0);

    if (req.method === "POST") {
      // 전체 방문자 수 증가
      const totalVisit = await collection.findOne({ page: "resume" });
      if (totalVisit) {
        await collection.updateOne({ page: "resume" }, { $inc: { total: 1 } });
      } else {
        await collection.insertOne({ page: "resume", total: 1 });
      }

      // 오늘 방문자 수 증가
      const todayVisit = await collection.findOne({ date: todayDate });
      if (todayVisit) {
        await collection.updateOne({ date: todayDate }, { $inc: { count: 1 } });
      } else {
        await collection.insertOne({ date: todayDate, count: 1 });
      }

      // 전체 방문자 수와 오늘 방문자 수를 다시 가져오기
      const updatedTotal = await collection.findOne({ page: "resume" });
      const updatedToday = await collection.findOne({ date: todayDate });

      res.status(200).json({
        total: updatedTotal?.total || 0,
        today: updatedToday?.count || 0,
      });
    } else if (req.method === "GET") {
      // 전체 방문자 수와 오늘 방문자 수 조회
      const totalVisit = await collection.findOne({ page: "resume" });
      const todayVisit = await collection.findOne({ date: todayDate });

      res.status(200).json({
        total: totalVisit?.total || 0,
        today: todayVisit?.count || 0,
      });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "방문자 수 업데이트에 실패했습니다" });
  }
}
