import React from "react"

interface TableProps {
  headers: string[];
  data: { [key: string]: string | number }[]; 
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-md font-medium text-secondary">
              <thead className="border-b border-neutral-200 bg-secondary text-white font-medium">
                <tr>
                  {headers.map((header: string, index: number) => (
                    <th key={index} className="px-6 py-4">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex: number) => (
                  <tr key={rowIndex} className="border-b border-neutral-200 bg-primary/[0.1]">
                    {headers.map((header, index: number) => (
                      <td key={index} className="whitespace-nowrap px-6 py-4">
                        {row[header] || "-"} {/* Default to "-" if no data */}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>            
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
