import PropTypes from 'prop-types';
// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { NumericFormat } from 'react-number-format';

// project imports
import Dot from 'components/@extended/Dot';

function createData(tracking_no, name, fat, carbs, protein) {
  return { tracking_no, name, fat, carbs, protein };
}

const rows = [
  createData(84564564, 'Kofi Mensah', 'Meeting with the Managing Director', '2025-09-01'),
  createData(98764564, 'Ama Serwaa', 'Consultation with the Managing Director', '2025-09-03'),
  createData(98756325, 'Yaw Owusu', 'Requesting Approval from the Managing Director', '2025-09-05'),
  createData(98652366, 'Esi Asante', 'Follow-up Session with the Managing Director', '2025-09-08'),
  createData(13286564, 'Kwame Danquah', 'Contract Discussion with the Managing Director', '2025-09-09'),
  createData(86739658, 'Akosua Adjei', 'Progress Review with the Managing Director', '2025-09-10'),
  createData(13256498, 'Felix Tetteh', 'Scheduled Briefing with the Managing Director', '2025-09-11'),
  createData(98753263, 'Doris Nyarko', 'Performance Review with the Managing Director', '2025-09-12'),
  createData(98753275, 'Richmond Koomson', 'Project Presentation to the Managing Director', '2025-09-13'),
  createData(98753291, 'Naomi Adu', 'General Meeting with the Managing Director', '2025-09-14')
];



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'Id',
    align: 'left',
    disablePadding: false,
    label: 'ID'
  },
  {
    id: 'Applicant name',
    align: 'left',
    disablePadding: true,
    label: 'Applicant Name'
  },
  {
    id: 'purpose',
    align: 'left',
    disablePadding: false,
    label: 'Purpose'
  },
  {
    id: 'dateBooked',
    align: 'left',
    disablePadding: false,

    label: 'Date Booked'
  },
  // {
  //   id: 'protein',
  //   align: 'right',
  //   disablePadding: false,
  //   label: 'Total Amount'
  // }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function OrderStatus({ status }) {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Approved';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
}

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const order = 'asc';
  const orderBy = 'tracking_no';

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table aria-labelledby="tableTitle">
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.tracking_no}
                >
                  <TableCell component="th" id={labelId} scope="row">
                    <Link color="secondary">{row.tracking_no}</Link>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell>
                    {row.carbs}
                    {/* <OrderStatus status={row.carbs} /> */}
                  </TableCell>
                  {/* <TableCell align="left">
                    <NumericFormat value={row.protein} displayType="text" thousandSeparator prefix="$" />
                  </TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

OrderTableHead.propTypes = { order: PropTypes.any, orderBy: PropTypes.string };

OrderStatus.propTypes = { status: PropTypes.number };
