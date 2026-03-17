// UpdateLog.js
import React, { useState, useEffect } from "react";
import { Button, Popover } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const UpdateLog = () => {
  const [open, setOpen] = useState(false);
  const [updateLogs, setUpdateLogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUpdateLog = async () => {
      try {
        const res = await fetch("/data/updatelog.json");
        const data = await res.json();
        const sorted = [...data].sort((a, b) => b.id - a.id);
        setUpdateLogs(sorted);
      } catch (err) {
        console.error("Failed to fetch update log:", err);
      }
    };
    fetchUpdateLog();
  }, []);

  const handleKick = (log) => {
    if (log?.id) {
      router.push(`/updateLog/${log.id}`);
      setOpen(false);
    }
  };

  const content = updateLogs.length > 0 ? (
    <div style={{ maxHeight: "180px", overflowY: "auto", width: "260px" }}>
      {updateLogs.map((log) => (
        <div
          key={log.id}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "6px",
            alignItems: "center",
            marginBottom: "8px",
            paddingBottom: "6px",
            borderBottom: "1px solid #f0f0f0",
            fontSize: "12px",
          }}
        >
          <div>
            <div><strong>Commit:</strong> {log.commit}</div>
            <div><strong>Version:</strong> {log.version}</div>
          </div>
          <Button size="small" type="primary" onClick={() => handleKick(log)}>
            Go
          </Button>
        </div>
      ))}
    </div>
  ) : (
    <p style={{ width: "200px" }}>Loading update log...</p>
  );

  return (
    <Popover
      content={content}
      title="Update Log"
      trigger="click"
      open={open}
      onOpenChange={setOpen}
      overlayStyle={{ width: "280px" }}
    >
      <Button
        type="link"
        style={{
          color: "white"
        }}
      >
        <HistoryOutlined style={{ fontSize: "1.3vw" }} />
      </Button>
    </Popover>
  );
};

export default UpdateLog;
