import React from 'react';
import Abilities from './Abilities';
import Wises from './Wises';
import Traits from './Traits';
import Skills from './Skills';

import '../../styles/stats.css';

class StatsPage extends React.Component {
  render() {
    return (
      <div id="stats-page">
        <Abilities
          abilities={this.props.abilities}
          onMarkTest={this.props.onMarkTest}
          advancementDisabled={this.props.character.conditions.SICK}
          />
        <Wises
          wises={this.props.wises}
          />
        <Traits
          traits={this.props.traits}
          />
        <Skills
          skills={this.props.skills}
          onMarkTest={this.props.onMarkTest}
          isCollapsed={this.props.ui.skillTable.collapsed}
          onSkillCollapse={this.props.onSkillCollapse}
          advancementDisabled={this.props.character.conditions.SICK}
          />
      </div>
    );
  }
}

export default StatsPage;