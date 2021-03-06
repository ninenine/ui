import React, { Component } from 'react';

import './polyfills';
import './_container.scss';

import SingleComponent from '../src/documentation/SingleComponent';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { context: {} };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.context.kind !== prevState.context.kind ||
      nextProps.context.story !== prevState.context.story
    ) {
      window.scrollTo(0, 0);

      return {
        context: nextProps.context,
      };
    } else return null;
  }

  render() {
    const { context, story } = this.props;

    const storyRender = story();

    const flexBasis =
      storyRender.props.children && storyRender.props.children.props
        ? storyRender.props.children.props['data-flexbasis']
        : undefined;

    if (context && !context.kind.indexOf(' ') == 0) {
      return (
        <div role="main">
          <SingleComponent
            flexBasis={flexBasis ? flexBasis : undefined}
            html={context.story.includes('html') ? true : false}>
            {storyRender}
          </SingleComponent>
        </div>
      );
    } else if (context.story.includes('html')) {
      return (
        <div role="main">
          <HtmlComponent html={Html}>{storyRender}</HtmlComponent>
        </div>
      );
    } else {
      return (
        <div role="main" id="container">
          {storyRender}
        </div>
      );
    }
  }
}
