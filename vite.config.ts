import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "alumaa",
  project: "travel-agency",
  // An auth token is required for uploading source maps;
  // store it in an environment variable to keep it secure.
  authToken: "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"
  //process.env.SENTRY_AUTH_TOKEN,
  // ...
};

export default defineConfig(config=>  {
  return {
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    sentryReactRouter(sentryConfig,config),
    // Sentry plugin for uploading source maps
  ],
  sentryConfig,
  ssr:{
    noExternal:[/@syncfusion/]
  }
};
});

// export default defineConfig({
//   plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
//   ssr:{
//     noExternal:[/@syncfusion/]
//   }
// });
