"use client";
import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Trash2, PenLine } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from 'next/navigation';


export default function  PropertiesTable({ data }) {

  const router = useRouter();



  const [sorting, setSorting] = React.useState([]);
  const [tableData, setTableData] = React.useState(data || []);

  const handleEdit = (rowData) => {
 
    const titleParam = encodeURIComponent(rowData.title);
    router.push(`/edit-property/${titleParam}`);
  };

  const handleMarkAsSold = async (rowData) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HTML}/property/sold?id=${rowData.property_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.ok) {
        const data = await response.json();   
  
        alert("Property marked as sold");  
        setTableData((prev) =>
          prev.map((item) =>
            item.property_id === rowData.property_id
              ? { ...item, status: 0 } // update the status locally
              : item
          )
        );
      } else {
        const error = await response.json();
        console.error("Failed to mark as sold:", error.message);
        alert(`Failed to mark as sold: ${error.message}`);
      }
    } catch (error) {
      console.error("Error marking as sold:", error);
      alert("Error marking as sold");
    }
  };
  
  

  const handleDelete = async (rowData) => {
    console.log("rowData", rowData.title);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HTML}/property/delete?title=${rowData.title}`, {
        method: "DELETE",
        credentials: "include",
      });
  
      if (response.ok) {
        alert("Deleted successfully");
        setTableData((prev) =>
          prev.filter((item) => item.property_id !== rowData.property_id)
        );
      } else {
        const error = await response.json();
        console.error("Delete failed:", error.message);
      }
    } catch (error) {
      console.error("Error deleting row:", error);
    }
  };
  

  // Columns defined inside the component to access state handlers
  const columns = React.useMemo(
    () => [
      { header: "Property Id", accessorKey: "property_id" },
      { header: "Owner", accessorKey: "seller_name" },
      { header: "Phone Number", accessorKey: "telephone" },
      { header: "Title", accessorKey: "title" },
      { header: "Price", accessorKey: "price" },
      {
        header: "Status",
        accessorKey: "status",
        cell: ({ getValue }) => {
          const status = getValue();
          return status === 1 ? "aktywne" : "sprzedane";
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: tableData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="rounded-md border w-full max-w-screen-lg mx-auto overflow-x-auto">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="cursor-pointer select-none text-xs sm:text-base"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() === "asc"
                    ? " 🔼"
                    : header.column.getIsSorted() === "desc"
                    ? " 🔽"
                    : ""}
                </TableHead>
              ))}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
                className="text-sm sm:text-base"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-2 px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                <TableCell className="text-center sm:text-right">
                  <div className="flex justify-center sm:justify-end gap-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEdit(row.original)}
                    >
                      <PenLine size={16} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(row.original)}
                    >
                      <Trash2 size={16} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 text-xs font-semibold border border-red-500 px-2 py-1 rounded"
                      onClick={() => handleMarkAsSold(row.original)}
                    >
                      Sprzedane
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + 1} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
