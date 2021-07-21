import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// @ts-ignore
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  inner: {
    flexDirection: 'relative',
    padding: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '200px',
  },
}));

const Landing = () => {
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () => {
    history.push('/login');
  };

  return (
    <section className={classes.root}>
      <div className={classes.inner}>
        <h1>Welcome!</h1>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          style={{ borderRadius: 50 }}
          className={classes.submit}
          onClick={routeChange}
        >
          Login
        </Button>
      </div>
    </section>
  );
};

export default Landing;
