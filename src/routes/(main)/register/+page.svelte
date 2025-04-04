<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
</script>

<div class="min-h-[calc(100dvh-7rem)] flex items-center justify-center">
    <Card.Root class="mx-auto max-w-sm">
        <Card.Header>
            <Card.Title class="text-2xl">Авторизация</Card.Title>
            <Card.Description>Введите свой адрес электронной почты ниже, чтобы войти в свою учетную запись</Card.Description>
        </Card.Header>
        <Card.Content>
            <div class="grid gap-4">
                <div class="grid gap-2">
                    <Label for="email">Электронная почта</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div class="grid gap-2">
                    <div class="flex items-center">
                        <Label for="password">Пароль</Label>
                        <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                            Забыли пароль?
                        </a>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                    <Button type="submit" class="w-full">Авторизоваться</Button>
                    <Button variant="outline" class="w-full">Войти через Google</Button>
                </div>
                <div class="mt-4 text-center text-sm">
                Нет аккаунта?
                <a href="/login" class="underline">Зарегистрируйтесь</a>
            </div>
        </Card.Content>
    </Card.Root>
</div>

<style>
    :global(body) {
        @apply bg-muted/45;
    }
</style>
