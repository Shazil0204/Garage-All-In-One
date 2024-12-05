import React, { ReactNode } from "react";

interface TableProps {
  headers: string[]; // Array of headers
  data: Array<Record<string, any>>; // Array of objects for rows
  renderActions: (row: Record<string, any>) => ReactNode; // Function to render action buttons
}

const DynamicTable: React.FC<TableProps> = ({
  headers,
  data,
  renderActions,
}) => {
  return (
    <div className="overflow-x-auto ">
      <table className="w-full table-fixed border-collapse border border-gray-300">
        <thead className="bg-primary text-white">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`border border-gray-300 p-4 text-left ${
                  header.toLowerCase() === "id"
                    ? "lg:table-cell hidden w-1/12"
                    : ""
                } ${header.toLowerCase() === "date" ? "w-1/5" : ""}`}
              >
                {header}
              </th>
            ))}
            <th className="border border-gray-300 p-4 text-left sm:w-2/6 lg:w-1/5">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-2 even:text-primary even:bg-gray-100 overflow-x-auto ~text-xs/2xl"
            >
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className={`p-4 ${
                    header.toLowerCase() === "id" ? "lg:table-cell hidden" : ""
                  }`}
                >
                  {row[header]}
                </td>
              ))}
              <td className="p-4 flex gap-2 justify-start">
                {renderActions(row)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
