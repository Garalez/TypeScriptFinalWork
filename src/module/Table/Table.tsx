import { TableBody } from "./TableBody/TableBody"
import { TableHead } from "./TableHead/TableHead"

export const Table = () => {
  return (
    <div className="table-wrapper">
      <table className="table table-hover table-bordered">
        <TableHead />
        <TableBody />
      </table>
    </div>
  )
}