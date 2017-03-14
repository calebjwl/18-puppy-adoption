export default function puppies(state = [], action) {
  switch (action.type) {
    case 'PUPPY@FINDALL_COMPLETE':
      return _.unionBy(action.data, state, '_id');
    case 'PUPPY@FINDONE_COMPLETE':
    case 'PUPPY@CREATE_COMPLETE':
    case 'PUPPY@UPDATE_COMPLETE':
      return _.unionBy(action.data, state, '_id');
    default:
      return state;
  }
}