import { invoke } from "@tauri-apps/api/core";
import { isTauriAvailable } from "./env";

export async function open(path: string, openWith?: string): Promise<void> {
  if (isTauriAvailable()) {
    await invoke("plugin:shell|open", { path, with: openWith });
    return;
  }

  if (typeof window !== "undefined") {
    if (openWith) {
      console.warn(
        "Ignoring custom application hint when Tauri is unavailable:",
        openWith,
      );
    }

    const target = /^https?:/i.test(path) ? path : `file://${encodeURI(path)}`;
    window.open(target, "_blank", "noopener,noreferrer");
    return;
  }

  throw new Error("Shell open is not supported in this environment.");
}
