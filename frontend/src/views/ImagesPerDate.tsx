import { Message } from "../types/Message";
import { useState } from "react";
import axios from "axios";

const ImagesPerDate = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const fetchMessages = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    axios
      .get("http://127.0.0.1:5000/messages", {
        params: { start: startDate, end: endDate },
      })
      .then((response) => {
        console.log("Response data:", response.data);
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Images Per Date</h2>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ width: "100%", padding: "8px", margin: "5px 0" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ width: "100%", padding: "8px", margin: "5px 0" }}
        />
      </div>

      <button
        onClick={fetchMessages}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#FFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Fetch Messages
      </button>

      <div>
        <h3>Messages:</h3>
        {messages.length > 0 ? (
          <ul>
            {messages.map((message, index) => (
              <li key={index}>
                <strong>{message.id}</strong>: {message.content}
              </li>
            ))}
          </ul>
        ) : (
          <p>No messages found for the selected date range.</p>
        )}
      </div>
    </div>
  );
};

export default ImagesPerDate;
