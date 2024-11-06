import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `https://chat-app-3b1s.onrender.com/api/messages/send/${selectedConversation._id}`,
        { message },
        { withCredentials: true }
      );

      setMessages([...messages, res.data]);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.error || "Something went wrong!");
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
