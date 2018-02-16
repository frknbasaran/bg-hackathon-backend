export default {
    "ok": data => data,
    "error": error => (typeof error === "object") ? {"success":false, "message":error.message} : {"success":false, "message":error}
}