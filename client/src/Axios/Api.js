import axios from "axios";

const URL = 'http://localhost:8080'

function getValidLogin({ username, password }) {
  return axios.post(URL.concat(`/getvalid/${username}/${password}`));
}

function getCompanyNames() {
  return axios.get(URL.concat('/getallcompanynames'));
}

function getRoleNames() {
  return axios.get(URL.concat('/getallrolenames'));
}

function getLocationNames() {
  return axios.get(URL.concat('/getallcompanynames'));
}

function getSearchedDetails({ companyName, roleName, countryName, stateName, cityName, womenOnly, onCampus }) {
  return axios.get(URL.concat(`/search?company=${companyName}&role=${roleName}
  &country=${countryName}&state=${stateName}&city=${cityName}&womensonly=${womenOnly}&oncampus=${onCampus}`));
}

// we hsould add roles here:-
// If the profile belongs to logged-in user then we should show his history
// If not we should just show his published articles and profile discription

function getUserProfile({ username }) {
  return axios.get(`/user/${username}`);
}

export { getCompanyNames, getRoleNames, getLocationNames, getSearchedDetails, getUserProfile };