import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://chat-app-3b1s.onrender.com/api/users",
          {
            withCredentials: true,
          }
        );
        setConversations(res.data);
      } catch (error) {
        if (error.response.data && error.response.data.error) {
          toast.error(error.response.data.error || "Something went wrong!");
        } else {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
