import React from 'react';
import { Layout, MUI, Typography } from 'ty-common-react/src/styles';
import styled, { css } from 'styled-components';
import i18n from 'i18next';

const WelcomeModal = (props) => {
    const { enterpriseBlur, identifierButton, handleChangeInputs, checkIdentifier, welcomeModal, enterpriseError } = props;
    return (
        <>
            <MUI.Dialog
                open={welcomeModal}
                maxWidth="sm"
            >
                <MUI.DialogTitle>
                    {i18n.t('Complaints:CommonLabels.welcomeLabel')}
                </MUI.DialogTitle>

                <MUI.DialogContent>
                    <MUI.Box
                        display="flex"
                        padding="8px"
                    >
                        <Typography.H6>
                        {i18n.t('Complaints:HomeComplaint.welcomeModal')}:
                        </Typography.H6>
                    </MUI.Box>
                    <MUI.Box
                        display="flex"
                        padding="8px"
                    >
                    <GridItem item md={12} sm={12} xs={12}>
                    <MUI.TextField
                        displayEmpty
                        label={i18n.t('Complaints:HomeComplaint.enterpriseName')}
                        type="text"
                        name="enterpriseIdentifier"
                        onChange={handleChangeInputs}
                        error={enterpriseBlur}
                    />
                    {enterpriseError ?
                        <Layout.BoxRequired>
                            {i18n.t('Complaints:HomeComplaint.identifierError')}
                        </Layout.BoxRequired>
                    : null
                    }
                </GridItem>                    
            </MUI.Box>
                </MUI.DialogContent>

                <MUI.DialogActions>
                    <Layout.BoxRequired>
                        {`* `}
                        {i18n.t('Complaints:CommonLabels.requieredLabel')}
                    </Layout.BoxRequired>
                    <MUI.ButtonCTA
                        type="button"
                        color="primary"
                        disabled={identifierButton}
                        onClick={checkIdentifier}
                    >
                       {i18n.t('Complaints:CommonLabels.continueLabel')}
                    </MUI.ButtonCTA>
                </MUI.DialogActions>
            </MUI.Dialog>        
        </>
    )
}

export default WelcomeModal;

const GridItem = styled(MUI.Grid)`
  padding: 12px;
`;