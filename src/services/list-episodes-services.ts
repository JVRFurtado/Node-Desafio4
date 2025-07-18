import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise <PodcastTransferModel> => {

    // defino contrado
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    // busco os dados
    const data = await repositoryPodcast();
    
    // verifico o tipo de resposta
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    }
    
    return responseFormat;
};