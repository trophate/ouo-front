import axios from "axios"
import {loginPostProcessor} from "./route.js";

export function login(username, password) {
    axios.post("/api/ouo/auth/login",
        {username: username, password: password})
        .then(function (success) {
            if (success.data.code === 1) {
                loginPostProcessor();
            } else {

            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
