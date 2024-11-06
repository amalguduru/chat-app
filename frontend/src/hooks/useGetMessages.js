import { useEffect, useState } from "react";
import axios from "axios";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState("");
  const { selectedConversation, messages, setMessages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://chat-app-3b1s.onrender.com/api/messages/${selectedConversation._id}`,
          { withCredentials: true }
        );

        setMessages(res.data);
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

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
