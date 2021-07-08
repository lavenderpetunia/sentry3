import * as Sentry from "@sentry/browser";
import { Integrations as TracingIntegrations } from "@sentry/tracing";
import './App.css';

Sentry.init({
  dsn: "https://d60f38c2b0f149b7b60bdad6b7a998f4@o911779.ingest.sentry.io/5855066",
  integrations: [new TracingIntegrations.BrowserTracing()],
  tracesSampleRate: 1
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Yuval's 3rd assignment</h3>
        <button onClick={throwError}>Throw Error</button>
      </header>
    </div>
  );
};

function throwError() {
  throw Error("Test Sentry Error Monitoring for React");
};

export default App;
