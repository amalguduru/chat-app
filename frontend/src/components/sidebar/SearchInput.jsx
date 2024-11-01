import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (query.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const match = conversations.find((c) =>
      c.fullName.toLowerCase().includes(query.toLowerCase())
    );

    if (match) {
      setSelectedConversation(match);
      setQuery("");
    } else {
      toast.error("No such user found!");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-blue-300 text-black hover:text-white"
      >
        <IoSearchSharp className="h-6 w-6" />
      </button>
    </form>
  );
};

export default SearchInput;
