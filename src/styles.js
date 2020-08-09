import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        padding: '3%',
        borderRadius: 10,
        color: 'white',
        backgroundColor: 'rgba(21, 101, 192)',
        margin: '0 12px',
        textAlign: 'center',
        height: 300,
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column-reverse',
          textAlign: 'center',
          width: '100%',
          height: 'initial',
          '&:nth-of-type(1)': {
            marginBottom: '12px',
          },
        },
      },
      infoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      },
}));