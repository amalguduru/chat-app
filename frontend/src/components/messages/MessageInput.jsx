import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 outline-none text-white"
        />
        <button
          type="submit"
          className="absolute flex end-0 inset-y-0 items-center pe-4"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
