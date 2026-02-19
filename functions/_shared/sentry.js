const Sentry = require("@sentry/node");

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.JEKYLL_ENVIRONMENT,
  integrations: [
    Sentry.httpIntegration({
      trackIncomingRequestsAsSessions: false,
    }),
  ],
});

module.exports = Sentry;
