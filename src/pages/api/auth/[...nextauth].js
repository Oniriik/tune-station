import NextAuth from 'next-auth/next';
import SpotifyProvider from 'next-auth/providers/spotify';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import usersDb from '../../../lib/usersDb';

const authOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        }),
    ],
    adapter: MongoDBAdapter(usersDb),
};
export default NextAuth(authOptions);
