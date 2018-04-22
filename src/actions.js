/*
* Action types
*/

// UI
export const SHOW_TAB = 'SHOW_TAB';

// INFO
export const TOGGLE_CONDITION = 'TOGGLE_CONDITION';
export const ADD_POINT = 'ADD_POINT';
export const SPEND_POINT = 'SPEND_POINT';

// STATS
export const MARK_TEST = 'MARK_TEST';
export const MARK_WISE = 'MARK_WISE';
export const SKILL_COLLAPSE = 'SKILL_COLLAPSE';


/* Other Constants */

export const Tabs = {
  MENU: 'MENU',
  BIO: 'BIO',
  STATS: 'STATS',
  INFO: 'INFO',
  GEAR: 'GEAR',
  ROLL: 'ROLL'
}

export const PointCategories = {
  FATE: 'fate',
  PERSONA: 'persona',
  CHECKS: 'checks'
}

/* Action Creators */

export function toggleCondition(condition) {
  console.log(`action create: ${condition} condition toggle`);
  return {
    type: TOGGLE_CONDITION,
    payload: {
      condition: condition
    }
  };
}

export function showTab(tab) {
  return {
    type: SHOW_TAB,
    payload: {
      tab: tab
    }
  }
}

export function addPoint(category) {
  return {
    type: ADD_POINT,
    payload: {
      category: category
    }
  }
}

export function spendPoint(category) {
  return {
    type: SPEND_POINT,
    payload: {
      category: category
    }
  }
}

// could be for a skill or ability; we generalize to "skill"
export function markTest(skillName, result) {
  if (result !== 'PASS' && result !== 'FAIL') {
    throw new Error(`Bogus test result: ${result}`);
  }
  return {
    type: MARK_TEST,
    payload: {
      skillName: skillName,
      result: result
    }
  };
};

export function skillCollapse() {
  return {
    type: SKILL_COLLAPSE
  };
};

export function markWise(wiseName, testType) {
  testType = testType.toLowerCase();
  if (!['pass', 'fail', 'fate', 'persona'].include(testType)) {
    throw new Error(`Bogus wise type: ${testType}`);
  }
  return {
    type: MARK_WISE,
    payload: {
      wiseName: wiseName,
      testType: testType
    }
  }
};

// ROLLS
