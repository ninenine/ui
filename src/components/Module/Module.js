import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  /**
   * Specify the content of the `Module`, usually a `ModuleHeader` `ModuleBody` and `ModuleFooter`component.
   */
  children: PropTypes.node,
  /**
   * The CSS class name for the slider.
   */
  className: PropTypes.string,
  /**
   * Disables the default margin
   */
  noMargin: PropTypes.bool,
  /**
   * Use 100% height of parent container
   */
  fullHeight: PropTypes.bool,
  /**
   * Light appearance (for white backgrounds)
   */
  light: PropTypes.bool,
  /**
   * Dark appearance
   */
  dark: PropTypes.bool,
  /**
   * Additional hover styling
   */
  withHover: PropTypes.bool,
};

const moduleBodyPropTypes = {
  /**
   * Specify the content of the `ModuleBody`
   */
  children: PropTypes.node,
  /**
   * Specify wheater the content should be centered.
   */
  centered: PropTypes.bool,
  /**
   * Specify wheater the body should have no padding.
   */
  noPadding: PropTypes.bool,
  /**
   * The CSS class name for the slider.
   */
  className: PropTypes.string,
};

const moduleHeaderPropTypes = {
  /**
   * Specify the content of the `ModuleHeaders`
   */
  children: PropTypes.node,
  /**
   * The CSS class name for the slider.
   */
  className: PropTypes.string,
};

const defaultProps = {
  centered: false,
};

const moduleBodydefaultProps = {};

const Module = ({
  dark,
  light,
  centered,
  children,
  className,
  margin,
  fullHeight,
  noMargin,
  withHover,
  ...other
}) => {
  const wrapperClasses = classNames(
    {
      'wfp--module--dark': dark,
      'wfp--module--no-margin': noMargin,
      'wfp--module--full-height': fullHeight,
      'wfp--module--margin-xs': margin === 'xs',
      'wfp--module--margin-md': margin === 'md',
      'wfp--module--margin-lg': margin === 'lg',
      'wfp--module--light': light,
      'wfp--module--with-hover': withHover,
    },
    className,
    'wfp--module'
  );

  return (
    <div className={wrapperClasses} {...other}>
      <div className="wfp--module__inner">{children}</div>
    </div>
  );
};

const ModuleBody = ({ children, className, centered, noPadding, ...other }) => {
  const wrapperClasses = classNames('wfp--module__content', className, {
    'wfp--module__content--centered': centered,
    'wfp--module__content--no-padding': noPadding,
  });

  return (
    <div className={wrapperClasses} {...other}>
      {children}
    </div>
  );
};

const ModuleHeader = ({ filter, children, className, ...other }) => {
  const wrapperClasses = classNames('wfp--module__header', className);

  return (
    <div className={wrapperClasses} {...other}>
      <h1 className="wfp--module__title">{children}</h1>
      {filter && <div className="wfp--module__filter">{filter}</div>}
    </div>
  );
};

const ModuleFooter = ({ centered, children, className, ...other }) => {
  const wrapperClasses = classNames('wfp--module__footer', className);

  return (
    <div className={wrapperClasses} {...other}>
      {children}
    </div>
  );
};

Module.propTypes = propTypes;
ModuleBody.propTypes = moduleBodyPropTypes;
Module.defaultProps = defaultProps;
ModuleBody.defaultProps = moduleBodydefaultProps;
ModuleHeader.propTypes = moduleHeaderPropTypes;
ModuleFooter.defaultProps = moduleBodydefaultProps;

export { Module, ModuleBody, ModuleHeader, ModuleFooter };
