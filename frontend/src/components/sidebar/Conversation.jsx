import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

/* eslint-disable react/prop-types */
const Conversation = ({ conversation, emoji, lastIndex }) => {
  console.log(conversation);
  const { setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  // const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-gray-300 rounded p-2 py-1 cursor-pointer `}
        onClick={() => {
          setSelectedConversation(conversation);
        }}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-600">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIndex && (
        <div className="divider my-1 py-0 h-1 bg-gray-400 opacity-50" />
      )}
    </>
  );
};

export default Conversation;
