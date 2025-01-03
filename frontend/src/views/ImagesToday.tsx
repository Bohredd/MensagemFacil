import axios from "axios";
import { Message } from "../types/Message";
import { useEffect, useState } from "react";

const ImagesToday = () => {

    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {

        const today = new Date();

        axios
          .get("http://127.0.0.1:5000/messages", {
            params: {
              start: today.toISOString().split("T")[0],
              end: today.toISOString().split("T")[0],
            },
          })
          .then((response) => {
            console.log("Response data:", response.data);
            setMessages(response.data);
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
    }, []);

    console.log("Messages", messages);

    return (
        <div>ImagesToday teste</div>
    )
}

export default ImagesToday