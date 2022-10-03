import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getLink } from '../../utils/getLink';
import './DirectorMessage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    background: 'rgb(240,240,240)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -30,
    boxShadow: 'none',
  },
  MessageContainer: {
    width: '100%',
    height: 'auto',
    marginTop: 40,
    marginBottom: 40,
    zIndex: 2,
    display: 'flex',
    flexDirection: 'row',
    boxShadow: 'none',
    borderRadius: 20,
    [theme.breakpoints.down(780)]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  MessageHeader: {
    fontSize: 40,
    marginBottom: '0.5%',
    marginTop: '0.5%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 0,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 250,
    height: 250,
    margin: 30,
    boxShadow: '0 0 12px',
    borderRadius: '50%',
  },
}));

const DirectorMessageComponent = ({ data }) => {
  const classes = useStyles();
  const createDirectorMessage = () => {
    return { __html: data.content };
  };

  return (
    <React.Fragment>
      <div>
        <div
          style={{
            fontSize: 40,
            textAlign: '-webkit-center',
            justifyContent: 'center',
            display: 'flex',
            marginBottom: -10,
            marginTop: 70,
          }}
        >
          <i
            class="fas fa-comment"
            style={{
              marginBottom: '0.5%',
              marginTop: '0.5%',
              marginRight: '0.9%',
            }}
          ></i>
          <h2 className={classes.MessageHeader}>{data.title}</h2>
        </div>
        <h3
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: 5,
          }}
        >
          <hr style={{ width: '60%', marginBottom: 35 }} />
        </h3>
      </div>
      {data ? (
        <Container className="director-column" spacing={2}>
          <Container
            item
            xs={12}
            sm={12}
            md={4}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '12px',
              padding: '20px 30px 3px',
              width: 'auto',
            }}
          >
            <div className="diroimg">
              <img src={getLink(data.image)} alt="" />
            </div>
            <div className="dir-name">
              {' '}
              <h3>{data.name}</h3>
            </div>
          </Container>

          <Container item xs={12} sm={12} md={8} className="dir-message">
            <p dangerouslySetInnerHTML={createDirectorMessage()} />
          </Container>
        </Container>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};
export default DirectorMessageComponent;
