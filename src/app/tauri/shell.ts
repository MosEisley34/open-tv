import { invoke } from "@tauri-apps/api/core";

export async function open(path: string, openWith?: string): Promise<void> {
  await invoke("plugin:shell|open", { path, with: openWith });
}
