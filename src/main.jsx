import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://0f968339117abc56abb396ee4b39913a@o4507141630132224.ingest.us.sentry.io/4507141632425984",
  integrations: [
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect : React.useEffect,
    }),
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
 
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
