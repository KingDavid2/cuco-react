import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import ProfileAccount from "../components/ProfileAccount";
import ProfileAddresses from "../components/ProfileAddresses";
import ProfilePurchases from "../components/ProfilePurchases";
import ProfilePayments from "../components/ProfilePayments";
import { profile } from "../dummies/userData";

const themes = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  root: {
    // display: "flex"
  },
  content: {
    // paddingTop: "5px"
  },
  card: {
    minWidth: 300,
    maxWidth: 1200,
    minHeight: 600,
    maxHeight: "100%",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    verticalAlign: "middle",
    padding: "20px",
    boxShadow:
      "0px 3px 10px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"
  },
  bullet: {
    // display: 'inline-block',
    // margin: '0 2px',
    // transform: 'scale(0.8)',
  },
  title: {
    // fontSize: 12,
  },
  pos: {
    // marginBottom: 12,
  }
});

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
  }

  onSelectionChanged(args) {
    if (args.name == "selectedIndex") {
      this.setState({
        selectedIndex: args.value
      });
    }
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.content}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.root}>
              <h4>Mi Perfil</h4>
            </div>

            {profile.type === 1 ? (
              <Tabs defaultTab="tab-cuenta">
                <TabList>
                  <Tab tabFor="tab-cuenta">Cuenta</Tab>
                  <Tab tabFor="tab-direcciones">Direcciones</Tab>
                  <Tab tabFor="tab-compras">Compras</Tab>
                  {/* <Tab tabFor="tab-metodosPago">Métodos Pago</Tab> */}
                </TabList>
                <TabPanel tabId="tab-cuenta">
                  <ProfileAccount data={profile} />
                </TabPanel>
                <TabPanel tabId="tab-direcciones">
                  <ProfileAddresses data={profile} />
                </TabPanel>
                <TabPanel tabId="tab-compras">
                  <ProfilePurchases data={profile} />
                </TabPanel>
                {/* <TabPanel tabId="tab-metodosPago">
                  <ProfilePayments data={profile} />
                </TabPanel> */}
              </Tabs>
            ) : (
              <Tabs defaultTab="tab-cuenta">
                <TabList>
                  <Tab tabFor="tab-cuenta">Cuenta</Tab>
                  <Tab tabFor="tab-direcciones">Direcciones</Tab>
                  <Tab tabFor="tab-compras">Compras</Tab>
                  {/* <Tab tabFor="tab-metodosPago">Métodos Pago</Tab> */}
                  <Tab tabFor="tab-galeria">Mis Productos</Tab>
                  {/* <Tab tabFor="tab-ventas">Ventas</Tab>
                  <Tab tabFor="tab-cartera">Cartera</Tab> */}
                </TabList>
                <TabPanel tabId="tab-cuenta">
                  <ProfileAccount data={profile} />
                </TabPanel>
                <TabPanel tabId="tab-direcciones">
                  <ProfileAddresses data={profile} />
                </TabPanel>
                <TabPanel tabId="tab-compras">
                  <ProfilePurchases data={profile} />
                </TabPanel>
                {/* <TabPanel tabId="tab-metodosPago">
                  <ProfilePayments data={profile} />
                </TabPanel> */}
                <TabPanel tabId="tab-galeria">
                  <span>Galeria</span>
                </TabPanel>
                <TabPanel tabId="tab-ventas">
                  <span>Ventas</span>
                </TabPanel>
                <TabPanel tabId="tab-cartera">
                  <span>Cartera</span>
                </TabPanel>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Profile);
