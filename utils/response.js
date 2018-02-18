export default {
    "ok": data => ({"success":true, "data":data}),
    "error": error => (typeof error === "object") ? {"success":false, "message":error.message} : {"success":false, "message":error}
}