import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

export default function UpdateDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [log, setLog] = useState(null);
  const { language } = useContext(LanguageContext);
  const t = translations[language];  
  

  useEffect(() => {
    if (!id) return; 

    const fetchLog = async () => {
      try {
        const res = await fetch("/data/updateLog.json");
        const data = await res.json();
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
      <p><strong>Date:</strong> {log.date?.[language] || log.date?.en || 'Untitled'}</p>
      <p><strong>Description:</strong> {log.description?.[language] || log.description?.en || 'Untitled'}</p>
    </div>
  );
}
