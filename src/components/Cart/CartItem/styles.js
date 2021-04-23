import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    height: '22em',
    position: 'relative',
    ['@media (max-width:1280px)']: { // eslint-disable-line no-useless-computed-key
      height: '20em'
    },
    ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
      height: '22em'
    },
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      height: '20em'
    },
    ['@media (max-width:350px)']: { // eslint-disable-line no-useless-computed-key
      height: '21em'
    },
  },
  media: {
    height: '7em',
    width: '7em',
    margin: '1em auto'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  name: {
    fontSize: '1.1em'
  },
  price: {
    fontSize: '1em'
  },
  cardActions: {
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '0',
    right: '0',
    margin: '0 auto',
    width: '100%',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));