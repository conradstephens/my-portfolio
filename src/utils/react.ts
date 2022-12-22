// use-isomorphic-layout-effect.js
import { useLayoutEffect, useEffect } from "react";
// When trying to run 'useLayoutEffect', we run 'useEffect' server-side, then run 'useLayoutEffect' on page generation
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
export default useIsomorphicLayoutEffect;
