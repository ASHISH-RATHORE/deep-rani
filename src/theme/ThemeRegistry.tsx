"use client";

import * as React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useServerInsertedHTML } from "next/navigation";
import { medicalTheme } from "./medicalTheme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = React.useState(() => {
    const cache = createCache({
      key: "mui",
      prepend: true,
    });

    cache.compat = true;

    return cache;
  });

  const flush = React.useCallback(() => {
    const prevInserted = cache.inserted;
    cache.inserted = {};
    return Object.keys(prevInserted).map((key) => (
      <style
        key={key}
        data-emotion={`mui ${key}`}
        dangerouslySetInnerHTML={{
          __html: prevInserted[key] as string,
        }}
      />
    ));
  }, [cache]);

  useServerInsertedHTML(() => {
    return <>{flush()}</>;
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={medicalTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
