import {SPINNER} from './actionTypes';

const handleLoading = (status) => {
  return {
    type: SPINNER,
    spinner: status
  }
}

export default handleLoading;