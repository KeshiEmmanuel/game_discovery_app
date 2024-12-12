import axios from "axios";

export const GameApiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "855ce31cff2547b0a26e130700bcacf3",
    },
});
