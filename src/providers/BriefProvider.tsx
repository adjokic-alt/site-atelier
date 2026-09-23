"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";
import type { ClientBrief } from "@/types";
import { createEmptyBrief } from "@/lib/brief/create-empty-brief";
import {
  briefReducer,
  type BriefAction,
} from "@/lib/brief/reducer";
import {
  clearBrief,
  loadBrief,
  saveBrief,
} from "@/lib/persistence/brief-storage";
import { getBriefStrength } from "@/lib/brief/strength";

interface BriefContextValue {
  brief: ClientBrief;
  dispatch: Dispatch<BriefAction>;
  hydrated: boolean;
  saved: boolean;
  strength: ReturnType<typeof getBriefStrength>;
  resetBrief: () => void;
}

const BriefContext = createContext<BriefContextValue | null>(null);

export function BriefProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [brief, baseDispatch] = useReducer(
    briefReducer,
    undefined,
    createEmptyBrief,
  );

  const [hydrated, setHydrated] = useState(false);
  const [saved, setSaved] = useState(true);

  const saveTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const hydrationStarted = useRef(false);

  const dispatch = useCallback<Dispatch<BriefAction>>(
    (action) => {
      if (action.type !== "HYDRATE") {
        setSaved(false);
      }

      baseDispatch(action);
    },
    [],
  );

  useEffect(() => {
    if (hydrationStarted.current) {
      return;
    }

    hydrationStarted.current = true;

    const hydrationTimer = window.setTimeout(() => {
      const storedBrief = loadBrief();

      if (storedBrief) {
        baseDispatch({
          type: "HYDRATE",
          brief: storedBrief,
        });
      }

      setHydrated(true);
    }, 0);

    return () => {
      window.clearTimeout(hydrationTimer);
    };
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
    }

    saveTimer.current = setTimeout(() => {
      saveBrief(brief);
      setSaved(true);
    }, 500);

    return () => {
      if (saveTimer.current) {
        clearTimeout(saveTimer.current);
      }
    };
  }, [brief, hydrated]);

  const resetBrief = useCallback(() => {
    clearBrief();
    setSaved(false);

    baseDispatch({
      type: "RESET",
      brief: createEmptyBrief(),
    });
  }, []);

  const value = useMemo(
    () => ({
      brief,
      dispatch,
      hydrated,
      saved,
      strength: getBriefStrength(brief),
      resetBrief,
    }),
    [
      brief,
      dispatch,
      hydrated,
      saved,
      resetBrief,
    ],
  );

  return (
    <BriefContext.Provider value={value}>
      {children}
    </BriefContext.Provider>
  );
}

export function useBrief() {
  const context = useContext(BriefContext);

  if (!context) {
    throw new Error(
      "useBrief must be used within BriefProvider",
    );
  }

  return context;
}