import { ReactNode, useEffect, useState } from "react";

async function setupRequestMocking() {
  if (import.meta.env.VITE_MOCK_API_REQUESTS !== "true") {
    return;
  }

  const browser = await import("./browser");
  browser.start();
}

export function BrowserRequestMocker({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setupRequestMocking().then(() => {
      setReady(true);
    });
  });

  if (!ready) {
    return null;
  }

  return children;
}
