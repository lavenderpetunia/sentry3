# Sentry
## 1) Install Sentry SDK for React

## Installation

For the full documentation [click here](https://docs.sentry.io/platforms/javascript/guides/react/)

1) Install sentry SDK in your local environment

```sh
# Using npm
npm install --save @sentry/react @sentry/tracing
# Using yarn
yarn add @sentry/react @sentry/tracing


export const _frontmatter = {}
```

2) Configure
- Configuration should happen as early as possible in your application's lifecycle.

```sh
import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";

Sentry.init({
  dsn: "https://d60f38c2b0f149b7b60bdad6b7a998f4@o911779.ingest.sentry.io/5855066",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));

// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

## Verify
As requested, a code sample in React that has a button that triggers an error
```sh
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
```

Run the attached code sample using npm start, you should be able to see the web app running in your browser on localhost:3000

Click on the Throw Error button and go to your Sentry Dashboard

Once you enter your dashboard click on the Issues tab of the left side menu bar.

Once you get to the issues screen, make sure to select the project that you want to monitor from the dropdown at the top left of the screen.
See Screenshot:
![Errors screen](https://www.dropbox.com/s/9ofh40wl0tzqght/errors_s3.png?dl=0&raw=1)

