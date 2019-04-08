import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Cart from './Cart';
import Shipping from './Shipping';
import Review from './Review';
import Payment from './Payment';
import store from '../store';


const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Cart', 'Shipping', 'Review'];
}

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <Cart
//               handleChange={this.handleChange}
//               />;
//     case 1:
//       return <Shipping/>;
//     case 2:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown step';
//   }
// }

class HorizontalLinearStepper extends React.Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);

  }

  state = {
    activeStep: 0,
    skipped: new Set(),
    first_name: '',
    last_name: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    postal_code: '',
    phone: '',
    email: ''
  };

  isStepOptional = step => step === 10;

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  };

  // handleChange = input => e => {
  //   this.setState({ [input]: e.target.value });
  //   console.log(e.target.value)
  // };

  handleChange(name, value){
    this.setState({ [name]: value },
  () => {
    store.dispatch({
      type: "ADD_SHIPPING",
      shipping:      
              {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                address1: this.state.address1,
                address2: this.state.address2,
                country: this.state.country,
                state: this.state.state,
                city: this.state.city,
                postal_code: this.state.postal_code,
                phone: this.state.phone,
                email: this.state.email
              }
    })
  });



  }

  getStepContent(step, values) {
    switch (step) {
      case 0:
        return <Cart
                
                />;
      case 1:
        return <Shipping
                handleChange={this.handleChange}
                values={values}
                />;
      case 2:
        return <Review
                values={values}
                />;

      // case 3:
      //   return <Payment
      //           />;

      default:
        return 'Unknown step';
    }
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const { first_name, last_name, address1, address2, country, state, city, postal_code, phone, email } = this.state;
    const values = { first_name, last_name, address1, address2, country, state, city, postal_code, phone, email };

    return (
      <div className={classes.root}>

        <div className="" style={{ padding: 10 }}>
            <Grid container
            justify='center'
            >
                <Grid container
                    className=''
                    direction="column"
                    xs={8}
                    >

<Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                {/* All steps completed - you&apos;re finished */}
              </Typography>
              <Payment
                />
            </div>
          ) : 
          (
            <div>
              <Typography className={classes.instructions}>{this.getStepContent(activeStep, values)}</Typography>
              <div>
              <Grid container
              justify='center'
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Payment' : 'Next'}
                </Button>
                </Grid>
              </div>
            </div>
          )}
        </div>

                </Grid>
            </Grid>

        </div>



      </div>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLinearStepper);