<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
  </script>

<div class="min-h-[calc(100dvh-7rem)] flex items-center justify-center">
    <Card.Root class="mx-auto max-w-sm">
    <Card.Header>
        <Card.Title class="text-xl">Зарегистрироваться</Card.Title>
        <Card.Description>Введите ваши данные, чтобы создать учетную запись</Card.Description>
    </Card.Header>
    <Card.Content>
        <div class="grid gap-4">
        <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
            <Label for="first-name">Имя</Label>
            <Input id="first-name" placeholder="Иван" required />
            </div>
            <div class="grid gap-2">
            <Label for="last-name">Фамилия</Label>
            <Input id="last-name" placeholder="Иванович" required />
            </div>
        </div>
        <div class="grid gap-2">
            <Label for="email">Электронная почта</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div class="grid gap-2">
            <Label for="password">Пароль</Label>
            <Input id="password" type="password" />
        </div>
        <Button type="submit" class="w-full">Создать аккаунт</Button>
        </div>
        <div class="mt-4 text-center text-sm">
        У вас уже есть аккаунт?
        <a href="/login" class="underline"> Войти </a>
        </div>
    </Card.Content>
    </Card.Root>
</div>

<style>
    :global(body) {
        @apply bg-muted/45;
    }
</style>