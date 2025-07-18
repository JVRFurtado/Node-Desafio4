import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-services';
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

const default_content = { "Content-Type": ContentType.JSON }

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const content: PodcastTransferModel = await serviceListEpisodes()

    res.writeHead(content.statusCode, default_content);
    res.write(JSON.stringify(content.body))
    res.end();
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, default_content);
    res.write(JSON.stringify(content.body))
    res.end();
}