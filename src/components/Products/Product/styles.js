import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    height: '38em',
    position: 'relative',
    ['@media (max-width:1050px)']: { // eslint-disable-line no-useless-computed-key
      height: '40em'
    },
    ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
      height: '36em'
    },
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      height: '38em'
    },
    ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
      height: '42em'
    },
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      height: '32em'
    },
    ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
      height: '38em'
    },
    ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
      height: '42em'
    },
    ['@media (max-width:350px)']: { // eslint-disable-line no-useless-computed-key
      height: '44em'
    }
  },
  media: {
    height: '13em',
    width: '13em',
    margin: '1em auto'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: '0',
    right: '0'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));