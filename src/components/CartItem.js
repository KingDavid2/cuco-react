import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import store from '../store';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class CartItem extends Component {

    constructor(props){
        super(props);
    }

    removeFromCart(product){
        this.props.removeFromCart(product)
    }

    render() {
        const { item } = this.props;
        return (
            <div className=''>
            <Grid item>
                
            <Paper className=''
            style={{ padding: 16 }}>
                <Grid container spacing={16}>
                <Grid item xs={4}>
                    <ButtonBase className=''>
                    <img className='' alt="complex" src={item.url} style={{ maxWidth: '100%' }}/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                        <Typography gutterBottom variant="title" fontSize={16}>
                        <b>{item.title}</b>
                        </Typography>
                        <Typography gutterBottom variant="subheading">{item.artist.name}</Typography>
                        <Typography color="textSecondary">Size: {item.weight} x {item.height}</Typography>
                        <Typography color="textSecondary">ID: {item.id}</Typography>

                    </Grid>
                    <Grid item xs>
                        <Typography style={{ cursor: 'pointer' }}>
                          </Typography>
                    </Grid>
                    </Grid>
                    <Grid item xs style={{textAlign: 'right'}}>
                            <Typography variant="subheading">$ {item.price}
                            </Typography>
                        </Grid>
                    <Grid container
                    direction="column">
                            <Grid item xs style={{textAlign: 'right'}}>
                            <Fab color="secondary"
                                    aria-label="Delete" 
                                    className=''
                                    onClick={() => this.removeFromCart(item)}>
                                    
                                <DeleteIcon />
                            </Fab>
                        </Grid>


                    </Grid>

                </Grid>
                </Grid>
            </Paper>
            </Grid>  
            </div>
        );
    }
}

export default withStyles(styles)(CartItem);