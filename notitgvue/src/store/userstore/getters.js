export function isLoggedIn (state) {
  return state.userDetails.accesstoken !== ''
}
