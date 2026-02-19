const sentry = require("@sentry/node");

sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.JEKYLL_ENVIRONMENT,
  integrations: [
    sentry.httpIntegration({
      trackIncomingRequestsAsSessions: false,
    }),
  ],
});

module.exports = sentry;
