import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FiMoreHorizontal } from "react-icons/fi";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, emp_type, type, overtimes, status) {
  return { name, emp_type, type, overtimes, status };
}

const rows = [
  createData("Frozen yoghurt", "part", "7h/8h", "0h", "pending"),
  createData("Rahhul yoghurt", "part", "7h/8h", "9h", "reject"),
  createData("Binita Pradhan", "part", "7h/8h", "0h", "pending"),
  createData("Rahul Guni", "full", "0h/8h", "5h", "approve"),
  createData("Frozen yoghurt", "part", "7h/8h", "0h", "pending"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee name</StyledTableCell>
            <StyledTableCell align="right">Emp.type</StyledTableCell>
            <StyledTableCell align="right">Paid/Work</StyledTableCell>
            <StyledTableCell align="right">Overtimes</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.emp_type}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.overtimes}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">
                <div className="dropdown dropdown-left shadow-lg">
                  <button tabIndex={0} className=" p-0 text-xl">
                    <FiMoreHorizontal />
                  </button>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Revert</a>
                    </li>
                    <li>
                      <a>Approve</a>
                    </li>
                    <li>
                      <a>Confirm</a>
                    </li>
                    <li>
                      <a>Reject</a>
                    </li>
                  </ul>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
