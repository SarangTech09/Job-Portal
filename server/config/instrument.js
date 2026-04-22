// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://7e0756dfc5080c3ea77107be2f8007f2@o4511259269070848.ingest.us.sentry.io/4511259280605184",
  integrations: [
    Sentry.mongooseIntegration(),
  ],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});