const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rouded-full">
          <img src="" alt="chat bubble" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! This is Amal
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-900">
        12:42
      </div>
    </div>
  );
};

export default Message;
