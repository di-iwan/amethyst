<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
	import { FormControl, FormField, FormFieldErrors, FormLabel } from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input/index.js";
    import { formSchema } from "./schema";
    import {
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
	import { type PageData } from "./$types";

    export let data: PageData;
 
    const form = superForm(data.form, {
        validators: zodClient(formSchema),
    });
    
    const { form: formData, enhance } = form;
</script>

<div class="min-h-[calc(100dvh-7rem)] flex items-center justify-center">
    <Card.Root class="mx-auto max-w-sm">
        <Card.Header>
            <Card.Title class="text-2xl">Авторизация</Card.Title>
            <Card.Description>Введите свой адрес электронной почты ниже, чтобы войти в свою учетную запись</Card.Description>
        </Card.Header>
        <Card.Content>
            <form method="POST" use:enhance class="grid gap-4">
                <FormField {form} name="email">
                    <FormControl let:attrs>
                        <FormLabel>Электронная почта</FormLabel>
                        <Input {...attrs} placeholder="m@example.com" bind:value={$formData.email} />
                    </FormControl>
                    <FormFieldErrors />
                </FormField>
                <FormField {form} name="password">
                    <FormControl let:attrs>
                        <div class="flex items-center">
                            <FormLabel>Пароль</FormLabel>
                            <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                                Забыли пароль?
                            </a>
                        </div>
                        <Input type="password" {...attrs} bind:value={$formData.password} />
                    </FormControl>
                    <FormFieldErrors />
                </FormField>
                <Button type="submit" class="w-full">Авторизоваться</Button>
            </form>
        </Card.Content>
        <Card.Footer class="justify-center gap-1 text-center text-sm">
            Нет аккаунта?
            <a href="/register" class="underline">Зарегистрируйтесь</a>
        </Card.Footer>
    </Card.Root>
</div>

<style>
    :global(body) {
        @apply bg-muted/45;
    }
</style>
