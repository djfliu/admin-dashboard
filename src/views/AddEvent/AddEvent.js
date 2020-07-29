import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import { addEvent } from '../../api/EventsApi';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AddEvent = props => {
  const { ...rest } = props;

  const classes = useStyles();

  const [events, setValues] = useState({
    event_title: 'Velocity Pitch',
    event_url: 'URL',
    event_description: 'Tell us about your event',
    event_location: 'Hagey Hall',
    date: '',
    host: 'Entsoc'
  });

  const handleChange = event => {
    setValues({
      ...events,
      [event.target.name]: event.target.value
    });
  };

  const submitEvent = async () => {
    await addEvent(events, events.event_title);
  };

  return (
    <Card {...rest} className={clsx(classes.root)}>
      <form autoComplete="off" noValidate>
        <CardHeader
          subheader="Input the information of the new event"
          title="Add an Event"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the event name"
                label="Event Name"
                margin="dense"
                name="event_title"
                onChange={handleChange}
                required
                value={events.event_title}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Event Link"
                margin="dense"
                name="event_url"
                onChange={handleChange}
                required
                value={events.event_url}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Event event_descriptionription"
                margin="dense"
                name="event_description"
                onChange={handleChange}
                required
                value={events.event_description}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Event event_location"
                margin="dense"
                name="event_location"
                onChange={handleChange}
                value={events.event_location}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                id="date"
                label="Event date"
                margin="dense"
                name="date"
                onChange={handleChange}
                type="date"
                value={events.date}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Host"
                margin="dense"
                name="host"
                onChange={handleChange}
                required
                value={events.host}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            onClick={e => submitEvent(e)}
            variant="contained">
            Submit Event
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default AddEvent;
