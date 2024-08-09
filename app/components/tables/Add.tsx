"use client";
import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg relative max-w-lg w-full shadow-lg">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors" 
          onClick={() => props.setOpen(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New {props.slug}
        </h1>
        <form onSubmit={handleSubmit} >
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="flex flex-col gap-2" key={column.field}>
                <label className="text-gray-700 font-medium">{column.headerName}</label>
                <input 
                  type={column.type}
                  placeholder={`Enter ${column.headerName}`}
                  className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
            ))}
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;











