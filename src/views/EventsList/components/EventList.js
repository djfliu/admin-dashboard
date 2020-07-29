import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getEvents } from '../../../api/EventsApi';

export function useStyles() {
  return makeStyles({
    table: {
      minWidth: 650
    },

    bold: {
      fontWeight: 'bold'
    },
    root: {}
  });
}

export default class EventsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  async componentDidMount() {
    const events = await getEvents();
    this.setState({ events: events.events });
  }

  render() {
    const classes = useStyles();
    const { events } = this.state;

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Title</b>
              </TableCell>
              <TableCell align="right">
                <b>URL</b>
              </TableCell>
              <TableCell align="right">
                <b>Description</b>
              </TableCell>
              <TableCell align="right">
                <b>Location</b>
              </TableCell>
              <TableCell align="right">
                <b>Host</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map(row => (
              <TableRow key={row.event_title}>
                <TableCell component="th" scope="row">
                  {row.event_title}
                </TableCell>
                <TableCell align="right">{row.event_url}</TableCell>
                <TableCell align="right">{row.event_description}</TableCell>
                <TableCell align="right">{row.event_location}</TableCell>
                <TableCell align="right">{row.host}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
