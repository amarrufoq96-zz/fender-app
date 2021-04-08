import React from 'react';
import styled, { css } from 'styled-components';
import { MUI, Typography, Icons } from 'ty-common-react/src/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TraicingLogo from 'common/Images/home.jpg';
import i18n from 'i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: window.screen.width > 1500 ? "2.5%" : "1%",
    height: "100%",
    paddingBottom: "2%"
  },
}));

const MainContainer = props => {
  const classes = useStyles();
  const { enterprise, handleGoComplaint, handleGoTraincing } = props;

  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        <Grid container >
          <Grid item xs={12} sm={5}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <LogoTalentry
                src={TraicingLogo}
                alt="Talentry"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Divider orientation="vertical" style={{ marginLeft: "50%", marginRight: "50%" }} />
          </Grid>
          <Grid item xs={12} sm={5} style={{ marginTop: "5%" }}>
            <Grid container >
              <Grid item xs={12} sm={12}>
                <Typography.H2>
                {i18n.t('Complaints:HomeComplaint.homeTitle')}<StyledH4>{enterprise}</StyledH4>
                </Typography.H2>
                <Grid 
                  container 
                  justify="flex-start"
                  alignItems="center">
                  <Grid item sm={6} xs={12} style={{ marginTop:"7%", marginLeft: "15%"}}>
                    < MUI.ButtonCTA
                      color="primary"
                      disabled={false}
                      margin="false"
                      fullWidth
                      onClick={handleGoComplaint}
                    >
                      <Icons.Edit style={{ marginRight: "8px" }} />
                      {i18n.t('Complaints:HomeComplaint.newComplaint')}
                    </MUI.ButtonCTA >
                    <MUI.ButtonCTA
                      color="primary"
                      disabled={false}
                      margin="false"
                      fullWidth
                      style={{ marginTop: "10%", background: "#6F5091" }}
                      onClick={handleGoTraincing}
                    >
                      <Icons.Search style={{ marginRight: "8px" }} />
                      {i18n.t('Complaints:HomeComplaint.traicingComplaint')}
                    </MUI.ButtonCTA>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const LogoTalentry = styled.img`
  width: 80%;
`;

const HeadingStyle = css`
  font-family: 'Bryant Pro';
  font-weight: normal;
  letter-spacing: normal;
  margin: 0;
`;

// Heading 4
const StyledH4 = styled.h6`
  ${HeadingStyle};
  font-size: 20;
  line-height: 1.4;
  color: #AAAAAA;
  display: inline;
`;

export default MainContainer;