export interface WindowWithTauri extends Window {
  __TAURI__?: unknown;
}

export function isTauriAvailable(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof (window as WindowWithTauri).__TAURI__ !== "undefined"
  );
}

export function ensureTauri(message?: string): void {
  if (!isTauriAvailable()) {
    throw new Error(message ?? "Tauri API is not available in this environment.");
  }
}
