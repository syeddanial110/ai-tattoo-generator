import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const UISearchInput = ({ ...props }) => {
  return (
    <div className="relative">
      <Input type={"text"} placeholder="Search Here" {...props} />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none">
        <Search className="h-5 w-5" />
      </div>
    </div>
  );
};

export default UISearchInput;
