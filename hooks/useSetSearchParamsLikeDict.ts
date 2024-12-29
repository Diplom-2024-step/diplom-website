import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

export function useSetSearchPropsLikeDict(
) {
  const search = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setFunction = useCallback((values: Record<string, string | undefined>) => {
      const params = new URLSearchParams(search.toString());

      Object.entries(values).forEach(([key, value]) => {
        if (value) params.set(key, value);
        else params.delete(key);
      });
      router.push(pathname + "?" + params.toString());
    }, [search]
  );

  return setFunction;
}
