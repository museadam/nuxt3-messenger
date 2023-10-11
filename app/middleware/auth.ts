export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useState("currentUser");
  if (!user.value.id) {
    return navigateTo("/login");
  }
});
