"use client";
import { Provider as ProviderChakraVer3 } from "@/components/ui/provider";

import store from "@/utils/redux/store";

import { Provider as ProviderReactRedux } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProviderChakraVer3>
      <ProviderReactRedux store={store}>{children}</ProviderReactRedux>;
    </ProviderChakraVer3>
  );
}
