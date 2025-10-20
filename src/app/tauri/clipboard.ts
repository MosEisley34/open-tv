import { invoke } from "@tauri-apps/api/core";

export async function writeText(
  text: string,
  opts?: { label?: string },
): Promise<void> {
  await invoke("plugin:clipboard-manager|write_text", {
    text,
    label: opts?.label,
  });
}
