import * as http from "http";

import { 
    getFilterEpisodes, 
    getListEpisodes  
} from "./controllers/podscasts-controller";

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    //queryString
    //http://localhost:3636/api/episode?p=flow
    const baseUrl = req.url?.split("?")[0];

    // listar podcasts
    if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(req, res);
    }

    if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(req, res);
    }
}