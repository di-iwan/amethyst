<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { createEventDispatcher } from "svelte";
  
    let email = "";
    let success = false;
    let error = "";
  
    async function handleSubmit(event: Event) {
      event.preventDefault();
      success = false;
      error = "";
  
      try {
        const res = await fetch("/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
  
        const data = await res.json();
  
        if (res.ok) {
          success = true;
        } else {
          error = data?.message || "Произошла ошибка";
        }
      } catch (e) {
        error = "Сервер недоступен";
      }
    }
</script>

<div class="min-h-[calc(100dvh-7rem)] flex items-center justify-center">
    <Card.Root class="w-full max-w-sm">
    <Card.Header>
        <Card.Title class="text-2xl">Забыли пароль</Card.Title>
        <Card.Description>Введите свой адрес электронной почты, чтобы получить ссылку для сброса пароля.</Card.Description>
    </Card.Header>

    <form on:submit={handleSubmit}>
        <Card.Content class="grid gap-4">
        <div class="grid gap-2">
            <Label for="email">Электронная почта</Label>
            <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            bind:value={email}
            required
            />
        </div>

        {#if error}
            <p class="text-sm text-red-600">{error}</p>
        {/if}

        {#if success}
            <p class="text-sm text-green-600">Email sent! Check your inbox.</p>
        {/if}
        </Card.Content>

        <Card.Footer>
        <Button type="submit" class="w-full">Отправить ссылку для сброса</Button>
        </Card.Footer>
    </form>
    </Card.Root>
</div>
  