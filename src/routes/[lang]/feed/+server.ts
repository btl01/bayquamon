import { json, type RequestHandler } from '@sveltejs/kit'
import { getPosts } from '$lib/db/post'

export const GET: RequestHandler = async ({ locals, url }) => {
	const page = Number(url.searchParams.get('page')) || 0
	const user = locals.user
	const posts = await getPosts({
		where: {
			id: user
				? {
						notIn: user.hiddenPostIDs,
				  }
				: undefined,
		},
		page,
	})
	return json(posts)
}
