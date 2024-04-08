import { redirect } from "react-router-dom";
export const getDurationTime = function () {
  const storedExpirationTime = localStorage.getItem("expiration");
  const expirationTime = new Date(storedExpirationTime);
  const now = new Date();
  const duration = expirationTime.getTime() - now.getTime();
  return duration;
};
export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return;
  }
  const tokenDuration = getDurationTime();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}
export function tokenLoader() {
  const token = getToken();
  return token || null;
}
export function authTokenRoute() {
  const token = getToken();
  if (!token) {
    return redirect("/auth");
  }
}
