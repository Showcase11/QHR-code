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
    backgroundColor: "#6366f1",
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
  createData("Rahhul yosaghurt", "part", "7h/8h", "9h", "reject"),
  createData("Binita Pradhan", "part", "7h/8h", "0h", "pending"),
  createData("Rahul Guni", "full", "0h/8h", "5h", "approve"),
  createData("Frozen yogshurt", "part", "7h/8h", "0h", "pending"),
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
              <StyledTableCell
                className="cursor-pointer hover:font-semibold flex items-center "
                component="th"
                scope="row"
                style={{ display: "flex" }}
              >
                {" "}
                <img
                  src="https://images.hindustantimes.com/img/2022/09/10/1600x900/Virat_Kohli_1662825893265_1662825895109_1662825895109.jpg"
                  alt="person"
                  className="h-8 w-8 rounded-full mr-2 object-fill"
                />
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.emp_type}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.overtimes}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">
                <div className="dropdown dropdown-left ">
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
