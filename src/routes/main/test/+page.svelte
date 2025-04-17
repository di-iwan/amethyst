<script lang="ts">
	import { ResizableHandle, ResizablePane, ResizablePaneGroup } from "$lib/components/ui/resizable";
	import { Separator } from "$lib/components/ui/separator";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Button } from "$lib/components/ui/button";
  import { marked } from "marked";
	import { File, FileText, Text } from "lucide-svelte";

  let noteContent = "";
</script>

<div class="grid grid-cols-[0_1fr] md:grid-cols-[15rem_auto_1fr] w-full h-dvh">
  <div class="h-full bg-muted">
    NoteForge
  </div>
  <Separator orientation="vertical" />
  <main class="grid h-full grid-rows-[auto_auto_1fr]">
    <div class="grid grid-cols-[1fr_auto] p-4 bg-muted">
      <div>

      </div>
      <div class="flex items-center gap-2">
        <Button size="icon"><Text /></Button>
        <Button size="icon"><FileText /></Button>
        <Button size="icon"><File /></Button>
      </div>
    </div>
    <Separator />
    <ResizablePaneGroup direction="horizontal">
      <ResizablePane class="h-full" minSize={20}>
        <Textarea
          bind:value={noteContent}
          class="size-full resize-none border-none bg-transparent font-mono text-base text-foreground outline-none focus-visible:ring-0 rounded-none placeholder:text-muted-foreground"
          placeholder="Начните писать заметку..."
        />
      </ResizablePane>
      <ResizableHandle />
      <ResizablePane class="prose lg:prose-lg max-w-full" minSize={20}>
        {@html marked(noteContent)}
      </ResizablePane>
    </ResizablePaneGroup>
  </main>
</div>