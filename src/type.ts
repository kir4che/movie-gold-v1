export type Movie = {
	_id: string
	imdbId: string
	title: string
	releaseDate: string
	trailerLink: string
	genres: string[]
	poster: string
	backdrops: string[]
	reviewIds: string[]
}

export type Review = {
	_id: string
	body: string
	created: Date
	updated: Date
	_class: string
}
