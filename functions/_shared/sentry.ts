import * as sentry from "@sentry/node";

sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.JEKYLL_ENVIRONMENT,
  integrations: [
    sentry.httpIntegration({
      trackIncomingRequestsAsSessions: false,
    }),
  ],
});

export default sentry;
