import type { NextAuthConfig } from 'next-auth';
import { authRoutes } from './routes';

export const authConfig = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // async signIn({ account, profile }) {
    //   console.log(profile);

    //   if (profile?.email === 'shiuninsora123@gmail.com') {
    //     return true;
    //   }
    //   return false;
    // },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token }) {
      return token;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isAuthRoute = authRoutes.includes(nextUrl.pathname);
      if (isAuthRoute) {
        return false;
      }
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // return Response.redirect(new URL(DEFAULT_LOGIN_SETTING, nextUrl));
        return true;
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
