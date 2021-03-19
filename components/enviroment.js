const THEME = (process.env.REACT_APP_ENV === 'development') ? 'dark' : 'light';
const SERVER_URL = (process.env.REACT_APP_ENV === 'development') ? 'http://localhost:5000' : 'light';
export default { THEME, SERVER_URL };
