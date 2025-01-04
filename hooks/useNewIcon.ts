import useLocalStorage from "./useLocalStorage";

export function useNewIcon(): [
  string | null,
  (newIcon: string | null) => void,
] {
  const [value, setValue] = useLocalStorage<string | null>('NewIcon', null);

  return [value, setValue];
}