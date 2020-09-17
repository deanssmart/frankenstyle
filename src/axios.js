// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "http://frankenstyle.developme.space/api/draw/games/",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer R9tM2zkWkOmwWiV0pziHGL1RDREjEpwMkrXqDEcbpMe4fqiZv862pi94Dj6IYIHzLTvNcaQezbRdhJxc",
    },
});