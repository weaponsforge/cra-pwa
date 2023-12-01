// Redirect the non-protected /login route to /dashboard if user data is available
// Display regular public routes without redirect
function PublicRoute ({ Component, idx, path, ...props }) {
  return <Component {...props} />
}

export default PublicRoute
