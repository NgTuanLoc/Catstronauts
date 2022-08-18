const { ApolloServer } = require('apollo-server');
const dotenv = require('dotenv');

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const { TrackAPI } = require('./track-api');
const { mocks } = require('./mockupData');

dotenv.config();
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			trackAPI: new TrackAPI(),
		};
	},
});
const start = async () => {
	try {
		server.listen(PORT, () => {
			console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
		});
	} catch (error) {
		console.log('🚀 ~ file: index.js ~ line 13 ~ start ~ error', error);
	}
};

start();
