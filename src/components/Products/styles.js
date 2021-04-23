import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  disclaimer: {
    position: 'absolute',
    width: '100%',
    left: '0',
    textAlign: 'center',
    top: '5em',
    color: 'grey'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: '2em'
  },
  root: {
    flexGrow: 1,
  },
}));