const resolvers = {
	Query: {
		// returns an array of Tracks that will be used to populate the homepage grid of our web client
		tracksForHome: async (_, __, { test, test2, dataSources }) => {
			console.log(test());
			console.log(test2());

			return dataSources.trackAPI.getTracksForHome();
		},

		// get a single track by ID, for the track page
		track: (_, { id }, { dataSources }) => {
			return dataSources.trackAPI.getTrack(id);
		},
	},
	Track: {
		author: ({ authorId }, _, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId);
		},

		modules: ({ id }, _, { dataSources }) => {
			return dataSources.trackAPI.getTrackModules(id);
		},
	},
};

module.exports = { resolvers };
