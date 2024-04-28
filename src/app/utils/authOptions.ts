import { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: "QThwYqGTsiMNjUdsPOgivgeXk",
      clientSecret: "DlgSTvCPf4ebJpNS81RzlBZeVe0MsduTUeAImqN73OW20Q1tGX",
    }),
    DiscordProvider({
      clientId: "1233046629582508084",
      clientSecret: "779HKU9F_rmUCeYfueOOhX_9pYXhYV1p",
    }),
  ],
  pages: {
    signIn: "/",
  },
};
// AAAAAAAAAAAAAAAAAAAAABoqtgEAAAAAyOxZDbllep0VVE5c33Gwj7DkP5Q%3DNHe2rNA62Wswobihpa4O7QuZAPt2OmhRqmqLbRlA4RclO1JKmo
