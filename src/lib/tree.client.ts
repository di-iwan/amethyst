import { toast } from "svelte-sonner";
import type { Folder, Note } from "./types";

export async function getTree() {
  return fetch('/api/tree')
    .then(async (res) => await res.json())
    .catch(e => toast.error("Не удалось получить дерево файлов", e.message));
}

export async function addFolder(name: string, parent?: Folder|null) {
  const promise = fetch('/api/folders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, parent: parent?.id })
  }).then(async res => res.ok ? await res.json() : Promise.reject(res));

  toast.promise(promise, {
    loading: 'Создание папки',
    success: 'Папка создана',
    error: 'Не удалось создать папку'
  });

  return promise;
}

export async function addFile(name: string, parent?: Folder|null) {
  const promise = fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: name, parent: parent?.id })
  }).then(res => res.ok ? res.json() : Promise.reject(res));

  toast.promise(promise, {
    loading: 'Создание заметки',
    success: 'Заметка создана',
    error: 'Не удалось создать заметку'
  });

  return promise;
}

function findNodeById<F extends boolean, T>(
  tree: (Note|Folder)[],
  isFolder: F,
  id: number
): (F extends true ? Folder : Note) | null {
  for (const node of tree) {
    // Проверяем текущий узел
    if (node.id === id && node.isFolder === isFolder) {
      return node as any;
    }
    // Рекурсивно ищем в дочерних узлах
    if (node.isFolder && node.elements && node.elements.length > 0) {
      const found = findNodeById(node.elements, isFolder, id);
      if (found) {
        return found; // Если нашли в поддереве, возвращаем
      }
    }
  }
  return null; // Не нашли
}

export const findFolder = (tree: (Note|Folder)[], id: number) => findNodeById(tree, true, id) as Folder;
export const findNote = (tree: (Note|Folder)[], id: number) => findNodeById(tree, false, id) as Note;