import { Button } from "../components/button"
import { useState, useEffect, useMemo } from "react"
import { Table } from "../components/table";

export type dataType = {
  name: string;
  email: string;
}

export const TablePagination = () => {
  const totalCount = 100; // total number of items in the API
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<string[][]>([]);

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${pageSize}`)
      .then(response => response.json())
      .then(data => setData(data.map(
        (d: dataType) => { const { name, email } = d; return [ name, email ] }
      )))
      .then(() => setIsLoading(false))
  }, [page, pageSize])

  useEffect(() => {
    setPage(0);
  }, [pageSize])

  const totalPages = useMemo(() => {
    return Math.ceil(totalCount / pageSize);
  }, [totalCount, pageSize]);

  return (
    <div className="flex flex-col gap-2 text-left overflow-y-auto">
    <div className="flex gap-2 items-center justify-start">
      <label htmlFor="pageSize">Edit Page Size: </label>
      <input type="number" value={pageSize} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPageSize(Number(e.target.value))} />
    </div>
    <div className="w-full p-4">
      <Table columns={["Name", "Email"]} data={data} />
    </div>
    <div className="flex items-center justify-center gap-2">
      <span className="text-sm text-gray-500">Page {page + 1} of {totalPages}</span>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Button label="First" onClick={() => { setPage(0) }} disabled={isLoading || page === 0} />
      <Button label="Previous" onClick={() => { setPage(page - 1) }} disabled={isLoading || page === 0} />
      <Button label="Next" onClick={() => { setPage(page + 1) }} disabled={isLoading || page + 1 === totalPages} />
      <Button label="Last" onClick={() => { setPage(totalPages - 1) }} disabled={isLoading || page + 1 === totalPages} />
    </div>
    </div>
  )
}