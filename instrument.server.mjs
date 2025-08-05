import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://e44c036f9e62d66a5f45bf88c10d942a@o4509767771291648.ingest.us.sentry.io/4509767772798976",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
