import { invoke } from "@tauri-apps/api/core";
import { isTauriAvailable } from "./env";

export async function writeText(
  text: string,
  opts?: { label?: string },
): Promise<void> {
  if (isTauriAvailable()) {
    await invoke("plugin:clipboard-manager|write_text", {
      text,
      label: opts?.label,
    });
    return;
  }

  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  throw new Error("Clipboard API is not available in this environment.");
}
