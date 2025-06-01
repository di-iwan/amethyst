import { db } from '$lib/server/db';
import { asc, eq, inArray } from 'drizzle-orm';
import { folders, notes, type Folder, type Note } from './server/db/schema';
import type { Folder as TreeFolder, Note as TreeNote } from './types';

function buildTree(folders: Omit<Folder, 'userId'>[], notes: Omit<Note, 'userId'|'content'>[], rootId: number|null = null): (TreeFolder|TreeNote)[] {
  let tree: (TreeFolder|TreeNote)[] = [];
  
  folders.filter(folder => folder.parentId === rootId).forEach(folder => {
    tree.push({
      id: folder.id,
      name: folder.name,
      elements: buildTree(folders, notes, folder.id),
      isFolder: true
    });
  });

  notes.filter(note => note.folderId === rootId).forEach(note => {
    tree.push({
      id: note.id,
      name: note.title,
      isFolder: false
    });
  });

  tree.sort((a, b) => {
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1;
    }
    
    return a.name.localeCompare(b.name, undefined, {
      sensitivity: 'base', // Игнорировать регистр и диакритику
      numeric: true,       // Корректная сортировка чисел в строках (например, "10" после "2")
      caseFirst: 'false',  // Не приоритизировать регистр
    });
  });

  return tree;
}

// Функция для получения дерева
export async function getUserTree(userId: number): Promise<(TreeFolder|TreeNote)[]> {
  // Загружаем все записи одним запросом
  const foldersData = await db
    .select({
      id: folders.id,
      name: folders.name,
      parentId: folders.parentId
    })
    .from(folders)
    .where(eq(folders.userId, userId));

  const notesData = await db
    .select({
      id: notes.id,
      title: notes.title,
      folderId: notes.folderId
    })
    .from(notes)
    .where(eq(notes.userId, userId));

  foldersData.flatMap

  // Строим дерево
  return buildTree(
    foldersData,
    notesData
  );
}
