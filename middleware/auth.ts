import { currentUser } from "~/store/store";

export default defineNuxtRouteMiddleware((to, from) => {
  // const getCookie = useCookie("user");
  // const key = toRaw(getCookie.value) ?? "";
  // const id = key.id;
  // // const { data } = useNuxtData(id)
  // // console.log(data);
  // const user = await useGetUser(id);
  // console.log(user);
  // console.log(toRaw(user.value));
  // const val = toRaw(user.value.user);
  // currentUser.value = { ...val };
  // if (user === false) {
  //   return navigateTo("/login");
  // }
});
