import React from "react";
import PropTypes from "prop-types";
import AlertTitleM from '@mui/material/AlertTitle';

function AlertTitle(props) {
    return (
        <AlertTitleM {...props}>{props.children}</AlertTitleM>
    )
} 

AlertTitle.propTypes = {
  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,
  
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * @uxpinignoreprop
   */
  sx: PropTypes.object
}

export default AlertTitle;