import { toast } from "svelte-sonner";
import type { Folder, Note } from "./types";

export async function getTree() {
  return fetch('/api/tree')
    .then(async (res) => await res.json())
    .catch(e => toast.error("Не удалось получить дерево файлов", e.message));
}

export async function getNote(id: number) {
  const promise = fetch('/api/notes?id=' + id).then(async (res) => res.ok ? await res.json() : Promise.reject(res));

  toast.promise(promise, {
    loading: 'Загрузка заметки',
    success: 'Заметка загружена',
    error: 'Не удалось загрузить заметку'
  });

  return promise;
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

function findNodeById(
  tree: (Note|Folder)[],
  isFolder: boolean,
  id: number
): Folder | Note | null {
  for (const node of tree) {
    // Проверяем текущий узел
    if (node.id === id && node.isFolder === isFolder) {
      return node;
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

export const findFolder = (tree: (Note|Folder)[], id: number) => findNodeById(tree, true, id) as Folder|null;
export const findNote = (tree: (Note|Folder)[], id: number) => findNodeById(tree, false, id) as Note|null;

export async function renameFolder(id: number, name: string) {
  const promise = fetch(`/api/folders`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, name })
  }).then(res => res.ok ? res.json() : Promise.reject(res));

  toast.promise(promise, {
    loading: 'Переименование папки',
    success: 'Папка переименована',
    error: 'Не удалось переименовать папку'
  });

  return promise;
}

export async function renameNote(id: number, title: string) {
  const promise = fetch(`/api/notes`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, title })
  }).then(res => res.ok ? res.json() : Promise.reject(res));

  toast.promise(promise, {
    loading: 'Переименование заметки',
    success: 'Заметка переименована',
    error: 'Не удалось переименовать заметку'
  });

  return promise;
}

export async function changeNote(id: number, title: string, content: string) {
  const promise = fetch(`/api/notes`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, title, content })
  }).then(res => res.ok ? res.json() : Promise.reject(res));

  toast.promise(promise, {
    loading: 'Изменение заметки',
    success: 'Заметка изменена',
    error: 'Не удалось изменить заметку'
  });

  return promise;
}

export async function deleteFolder(id: number) {
  const promise = fetch(`/api/folders`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  }).then(res => res.ok ? res.json() : Promise.reject(res));

  toast.promise(promise, {
    loading: 'Удаление папки',
    success: 'Папка удалена',
    error: 'Не удалось удалить папку'
  });

  return promise;
}

export async function deleteNote(id: number) {
  const promise = fetch(`/api/notes`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  }).then(res => res.ok ? res.json() : Promise.reject(res));

  toast.promise(promise, {
    loading: 'Удаление заметки',
    success: 'Заметка удалена',
    error: 'Не удалось удалить заметку'
  });

  return promise;
}

export function hasElement(elements: (Note|Folder)[], element: Note|Folder|null): boolean {
  return elements.some(e =>
    (e.id === element?.id && e.isFolder === element.isFolder) ||
    (e.isFolder && hasElement(e.elements, element))
  );
}