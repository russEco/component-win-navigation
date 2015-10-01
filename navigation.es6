import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ListOfComponent from './list-of-component';
import Category from './category';

export default class Navigation extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.object),
      focusCategorySlug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      activeArticleId: PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      data: [],
    };
  }

  constructor(props) {
    super(props);

    this.handleFocusChange = this.handleFocusChange.bind(this);

    this.state = {
      focusCategorySlug: null,
      focusSubcategorySlug: null,
      activeCategorySlug: null,
      activeSubcategorySlug: null,
      activeArticleId: null,
    };
  }

  componentWillMount() {
    this.setState({
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
    });
  }

  resetFocus() {
    this.setState({
      focusCategorySlug: null,
      focusSubcategorySlug: null,
    });
  }

  handleFocusChange(focusChange) {
    this.setState(focusChange);
  }

  render() {
    const data = this.props.data;
    const childMetadata = {
      focusCategorySlug: this.state.focusCategorySlug,
      focusSubcategorySlug: this.state.focusSubcategorySlug,
      activeCategorySlug: this.state.activeCategorySlug,
      activeSubcategorySlug: this.state.activeSubcategorySlug,
      activeArticleId: this.state.activeArticleId,
    };
    return (
      <nav className={classnames(this.props.className, 'navigation')}>
        <ListOfComponent
          className="navigation__categories"
          component={Category}
          data={data}
          childMetadata={childMetadata}
          handleFocusChange={this.handleFocusChange}
        />
        <div className="navigation__menu-button"></div>
      </nav>
    );
  }

}
