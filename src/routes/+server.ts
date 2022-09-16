import type { RequestHandler } from './$types';
import getDate from '$lib/get-date';

export const GET: RequestHandler = async () => {
	const serverDate = getDate();

	return new Response(JSON.stringify({ serverDate }));
};
