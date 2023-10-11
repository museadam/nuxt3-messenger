import { User } from "@prisma/client";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const user: Ref<User> = useState("currentUser");
  if (!user?.value?.id) {
    return navigateTo("/login");
  }

  if (to.path === "/admin") {
    if (user.value.role !== "ADMIN") {
      return navigateTo("/");
    }
  }
});
