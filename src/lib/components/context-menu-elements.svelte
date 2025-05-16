<script lang="ts">
	import type { Folder, Note } from "$lib/types";
	import { ContextMenuContent, ContextMenuItem, ContextMenuSubContent } from "./ui/context-menu";

    export let element: Note|Folder|null = null;
    export let type: "element"|"folder" = "folder";
    export let root: boolean = false;
</script>

{#if root}
    <ContextMenuContent>
        {#if type === "folder"}
            <ContextMenuItem>
                Создать файл
            </ContextMenuItem>
            <ContextMenuItem>
                Создать папку
            </ContextMenuItem>
        {:else}
            <ContextMenuItem>
                Переименовать
            </ContextMenuItem>
            <ContextMenuItem>
                Удалить
            </ContextMenuItem>
        {/if}
    </ContextMenuContent>
{:else}
    <ContextMenuSubContent>
        {#if type === "folder"}
            <ContextMenuItem>
                Переименовать
            </ContextMenuItem>
            <ContextMenuItem>
                Удалить
            </ContextMenuItem>
        {:else}
            <ContextMenuItem>
                Переименовать
            </ContextMenuItem>
            <ContextMenuItem>
                Удалить
            </ContextMenuItem>
        {/if}
    </ContextMenuSubContent>
{/if}