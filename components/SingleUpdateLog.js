// pages/updateLog/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UpdateDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [log, setLog] = useState(null);

  useEffect(() => {
    if (!id) return; // wait until router is ready

    const fetchLog = async () => {
      try {
        const res = await fetch("/data/updatelog.json");
        const data = await res.json();

        // since JSON is an array, find the one with matching id
        const found = data.find((item) => String(item.id) === String(id));
        setLog(found);
      } catch (err) {
        console.error("Failed to fetch update log:", err);
      }
    };

    fetchLog();
  }, [id]);

  if (!log) {
    return <p style={{ padding: "20px" }}>Loading update detail...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <p><strong>Commit:</strong> {log.commit}</p>
      <p><strong>Version:</strong> {log.version}</p>
      <p><strong>Date:</strong> {log.date?.en}</p>
      <p><strong>Description:</strong> {log.description?.en}</p>
    </div>
  );
}
