import type { RequestHandler } from './$types';
import getDate from '$lib/server/get-date';

export const GET: RequestHandler = async () => {
	const date = getDate();

	return new Response(JSON.stringify({ date }));
};
