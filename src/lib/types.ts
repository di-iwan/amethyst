import type { Writable } from "svelte/store";

export type Note = {
  id: number;
  name: string;
  isFolder: false;
};

export type Folder = {
  id: number;
  name: string;
  elements: (Note|Folder)[];
  isFolder: true;
};

export type Tab = Note & {
  folder: Folder|null;
}

export type EditorData = {
  activeFolder: Writable<Folder|null>;
  activeElement: Writable<Folder|Note|null>;
  tabs: Writable<Tab[]>;
  activeTab: Writable<Note|null>;
}