import type { RequestHandler } from './$types';
import { logger } from '$lib/server/pino';

export const GET: RequestHandler = async () => {
	logger.info('/server');

	return new Response('/server');
};
