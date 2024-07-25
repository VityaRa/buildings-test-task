import { useEffect } from "react";

export const useListener = (
  cb: EventListener,
  event: keyof DocumentEventMap,
  deps: unknown[]
) => {
  useEffect(() => {
    document.addEventListener(event, cb);
    return () => {
      document.removeEventListener(event, cb);
    };
  }, [...deps]);
};
