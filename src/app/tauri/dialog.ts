import { invoke } from "@tauri-apps/api/core";

export interface DialogFilter {
  name: string;
  extensions: string[];
}

export interface OpenDialogOptions {
  title?: string;
  filters?: DialogFilter[];
  defaultPath?: string;
  multiple?: boolean;
  directory?: boolean;
  recursive?: boolean;
  canCreateDirectories?: boolean;
}

export interface SaveDialogOptions {
  title?: string;
  filters?: DialogFilter[];
  defaultPath?: string;
  canCreateDirectories?: boolean;
}

type OpenDialogReturn<T extends OpenDialogOptions> = T["directory"] extends true
  ? T["multiple"] extends true
    ? string[] | null
    : string | null
  : T["multiple"] extends true
    ? string[] | null
    : string | null;

export async function open<T extends OpenDialogOptions>(
  options: T = {} as T,
): Promise<OpenDialogReturn<T>> {
  if (typeof options === "object") {
    Object.freeze(options);
  }
  return await invoke<OpenDialogReturn<T>>("plugin:dialog|open", { options });
}

export async function save(
  options: SaveDialogOptions = {},
): Promise<string | null> {
  if (typeof options === "object") {
    Object.freeze(options);
  }
  return await invoke<string | null>("plugin:dialog|save", { options });
}
