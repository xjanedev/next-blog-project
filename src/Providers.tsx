"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};

export default Providers;

// 이때 attribute="class"를 추가해줌으로써 className에 dark와 light가 토글이 된다.
