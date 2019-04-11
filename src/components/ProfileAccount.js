import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from "@material-ui/core/Card";
import { CardActionArea, CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width:'100%',
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    textArea: {
        width: '100%',
        marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    card: {
        maxWidth: 300,
        margin: '15px 10px 10px 10px'
    },
    media: {
        height: 265,
    },
    buttons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    buttons: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    },
    buttonsStart: {
      display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
      },
      iconSmall: {
        fontSize: 20,
      },
});

class ProfileAccount extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        address: props.data.addresses[0],
        id: props.data.id,
        name: props.data.name,
        lastName: props.data.last_name,
        profileName: props.data.profile_name,
        imageUrl: props.data.profile_image,
        email: props.data.email,
        aboutMe: props.data.about_me,
        mainAddressId: props.data.main_address_id,
        raiting: props.data.raiting,
        showSave: false
    };

    this.toggleSave = this.toggleSave.bind(this);
  }

  toggleSave = () => {
    const { showSave } = this.state.showSave;
    this.setState( { showSave : !showSave } )
  };


  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    this.toggleSave();
  };

  render() {
    
    const { user } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container}>
        <div className="row">            
            <div className="column">
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={this.state.imageUrl}
                title="Contemplative Reptile"
                /> 
            </CardActionArea>
            <CardActions className={classes.buttonsStart}>
              <Button variant="contained" size="small" color="default" className={classes.button}>
              <EditIcon className={classNames(classes.leftIcon, classes.iconSmall)}>save</EditIcon>
              Actualizar Foto de Perfil
              </Button>
            </CardActions>
        </Card>
            </div>
            <div className="column-double">
                <TextField
                disabled
                id="email"
                label="Correo Electrónico"
                defaultValue={this.state.email}
                className={classes.textField}
                variant="outlined"
                margin="normal"
                />
                <TextField
                required
                id="profileName"
                label="Nombre de Perfil"
                defaultValue={this.state.profileName}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange('profileName')}
                />
                <TextField
                required
                id="name"
                label="Nombre(s)"
                defaultValue={this.state.name}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange('name')}
                />
                <TextField
                required
                id="lastName"
                label="Apellido(s)"
                defaultValue={this.state.lastName}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange('lastName')}
                />
                 <TextField
                required
                id="aboutMe"
                label="Acerca de mi"
                defaultValue={this.state.aboutMe}
                className={classes.textArea}
                margin="normal"
                multiline={true}
                variant="outlined"
                onChange={this.handleChange('aboutMe')}
                />
            </div>
        </div>
        </form>
        <div className={classes.buttons}>
            { this.state.showSave && 
                <Button variant="contained" size="small" color="primary" className={classes.button}>
                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)}>save</SaveIcon>
                Guardar Cambios
                </Button>
                }
        </div>
        <div className={classes.direccionPrincipal}>
            <h5>Direccion Principal</h5>
            <p>{this.state.address.name}</p>
            <p>{this.state.address.address +', '+ this.state.address.number+', '+this.state.address.town+', '+this.state.address.zipCode+', '+this.state.address.state}</p>
            
        </div>
      </div>
    );
  }
}

ProfileAccount.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ProfileAccount);