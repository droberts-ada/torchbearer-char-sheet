import { TOGGLE_CONDITION } from '../../actions';
import { Conditions, ConditionRules } from '../../rules/conditions';

const InitialConditions = {};
Object.keys(ConditionRules).forEach((name) => {
  InitialConditions[name] = ConditionRules[name].default_state;
});
InitialConditions;

const conditionsReducer = function(state=InitialConditions, action) {
  switch (action.type) {
    case TOGGLE_CONDITION:
    const name = action.payload.condition;
    const newConditions = {...state};
    newConditions[name] = !state[name];

    // Getting another condition removes fresh
    if (name !== Conditions.FRESH && newConditions[name]) {
      newConditions[Conditions.FRESH] = false;
    }

    // TODO: can't get fresh until all other conditions are clear
    return newConditions;

    default:
    return state;
  }
}

export default conditionsReducer;