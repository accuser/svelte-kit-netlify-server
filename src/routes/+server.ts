import type { RequestHandler } from './$types';
import { logger } from '$lib/pino';

export const GET: RequestHandler = async () => {
	logger.info('/');

	return new Response('/');
};
