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

export type EditorData = {
  activeFolder: Writable<Folder|null>;
  activeNote: Writable<Note|null>;
  tabs: Writable<Note[]>;
  activeTab: Writable<Note|null>;
}