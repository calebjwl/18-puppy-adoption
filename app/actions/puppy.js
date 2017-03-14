const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';
const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function parseJson(r) {
  return r.json();
}

export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data
  };
}

/**
 * Creates a thunk to find all puppies from the server
 * @return {function}
 */
export function findAll() {
  return dispatch => fetch(apiUrl).then(parseJson)
   .then((response) => {
     dispatch(findAllComplete(response));
   });
}
