import React from 'react';
import PropTypes from 'prop-types';
import BadgeM from "@mui/material/Badge";
import { styled } from '@mui/material/styles';


  const Root = styled('div')({
    flexGrow: 1,
  })

  function Badge(props) {
    const sx = Root;
  
    return <BadgeM {...props} sx={{ flexGrow: 1, bgcolor: 'headerBadges.main' }} showZero={props.showZero} anchorOrigin={{vertical: `${props.vertical}`, horizontal: `${props.horizontal}`}}>{props.children}</BadgeM>;
  }

  Badge.propTypes = {
    /**
     * The vertical position of the badge.
     */
    vertical: PropTypes.oneOf(['top', 'bottom']),

    /**
     * The horizontal position of the badge.
     */
    horizontal: PropTypes.oneOf(['right', 'left']),
    /**
     * The number to display in badge
     * @uxpinpropname  Count
     */
    badgeContent: PropTypes.node,

    /**
     * Max count to show.
     */
     max: PropTypes.number,

     /**
      * Wrapped shape the badge should overlap.
      */
     overlap: PropTypes.oneOf(['circular', 'rectangular']),
  
    /**
     * If `true`, the badge will be invisible.
     */
    invisible: PropTypes.bool,

    /**
     * Controls whether the badge is hidden when badgeContent is zero.
     */
    /** @uxpinignoreprop */
    showZero: PropTypes.bool,
  
    /**
    * The badge will be added relative to this node.
    */
    /** @uxpinignoreprop */
    children: PropTypes.node,
  
  
    /**
    * Override or extend the styles applied to the component.
    */
    /** @uxpinignoreprop */
    classes: PropTypes.object,
  
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary", "error", "info", "success", "warning"]),

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['dot', 'standard'])

  };
  
  export default Badge;



  