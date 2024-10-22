import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
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
