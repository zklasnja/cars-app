const selectLoggedInUserEmail = (state) => state.user.userEmail;
const selectRefreshToken = (state) => state.user.token;

export { selectLoggedInUserEmail, selectRefreshToken };