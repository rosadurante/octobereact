export const Table = ({ columns, data }: { columns: string[], data: string[][] }) => {
  
  return (
    <table className="w-full">
      <thead>
        <tr className="border-l border-r border-[#333]">
          {columns.map((column) => (
            <th key={column} className="border bg-[#333] text-[#fff] border-[#eee] px-4 py-1 text-left not-first:border-r-0 not-last:border-l-0">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.join(',')}>
          {row.map((cell) => (
              <td key={cell} className="border border-[#333] px-4 py-1">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}