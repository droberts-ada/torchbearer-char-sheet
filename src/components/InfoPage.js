import React from 'react';
import PropTypes from 'prop-types';
import Condition from './Condition';
import PointBucket from './PointBucket';
import { ConditionRules, DisplayOrder } from '../rules/conditions';
import { PointCategories } from '../actions';

import '../styles/info.css';

class InfoPage extends React.Component {
  buildPointBucket(category) {
    return (
      <PointBucket
        name={category}
        bucket={this.props.points[category]}
        onAdd={() => this.props.onPointAdd(category)}
        onSpend={() => this.props.onPointSpend(category)}
        />
    );
  };

  render() {
    return (
      <div id="info-page">
        {this.buildPointBucket(PointCategories.FATE)}
        {this.buildPointBucket(PointCategories.PERSONA)}
        {this.buildPointBucket(PointCategories.CHECKS)}
        <section className="conditions">
          <h2>Conditions</h2>
          <ul>
            {
              DisplayOrder.map((name) => {
                return (
                  <Condition
                    key={`condition_${name}`}
                    {...ConditionRules[name]}
                    active={this.props.conditions[name]}
                    onToggle={() => this.props.onConditionToggle(name)}
                    />
                );
              })
            }
          </ul>
        </section>
      </div>
    );
  }
}

export default InfoPage;
