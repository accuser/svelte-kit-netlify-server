import type { RequestHandler } from './$types';
import SanityClientConstructor from '@sanity/client';
import groq from 'groq';
import { SANITY_DATASET, SANITY_PROJECT_ID, SANITY_TOKEN } from '$env/static/private';

export const GET: RequestHandler = async () => {
	const sanity = SanityClientConstructor({
		dataset: SANITY_DATASET,
		projectId: SANITY_PROJECT_ID,
		apiVersion: 'v2021-10-21',
		token: SANITY_TOKEN,
		useCdn: true
	});

	const channels = await sanity.fetch(groq`*[_type == "channel"]`, {});

	return new Response(JSON.stringify(channels));
};
