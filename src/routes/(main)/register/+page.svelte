<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { type PageData } from "./$types";
	import { formSchema } from "./schema";
	import { FormField, FormControl, FormLabel, FormFieldErrors } from "$lib/components/ui/form";

    export let data: PageData;
 
    const form = superForm(data.form, {
        validators: zodClient(formSchema),
    });
    
    const { form: formData, enhance } = form;
  </script>

<div class="min-h-[calc(100dvh-7rem)] flex items-center justify-center">
    <Card.Root class="mx-auto max-w-sm">
        <Card.Header>
            <Card.Title class="text-xl">Зарегистрироваться</Card.Title>
            <Card.Description>Введите ваши данные, чтобы создать учетную запись</Card.Description>
        </Card.Header>
        <Card.Content>
            <form method="POST" use:enhance class="grid">
                <div class="grid grid-cols-2 gap-4">
                    <FormField {form} name="firstName">
                        <FormControl let:attrs>
                            <FormLabel>Имя</FormLabel>
                            <Input {...attrs} placeholder="Иван" bind:value={$formData.firstName} />
                        </FormControl>
                        <FormFieldErrors />
                    </FormField>
                    <FormField {form} name="lastName">
                        <FormControl let:attrs>
                            <FormLabel>Фамилия</FormLabel>
                            <Input {...attrs} placeholder="Иванович" bind:value={$formData.lastName} />
                        </FormControl>
                        <FormFieldErrors />
                    </FormField>
                </div>
                <FormField {form} name="email">
                    <FormControl let:attrs>
                        <FormLabel>Электронная почта</FormLabel>
                        <Input {...attrs} placeholder="m@example.com" bind:value={$formData.email} />
                    </FormControl>
                    <FormFieldErrors />
                </FormField>
                <FormField {form} name="password">
                    <FormControl let:attrs>
                        <FormLabel>Пароль</FormLabel>
                        <Input {...attrs} type="password" bind:value={$formData.password} />
                    </FormControl>
                    <FormFieldErrors />
                </FormField>
                <FormField {form} name="confirmPassword">
                    <FormControl let:attrs>
                        <FormLabel>Подтвердите пароль</FormLabel>
                        <Input {...attrs} type="password" bind:value={$formData.confirmPassword} />
                    </FormControl>
                    <FormFieldErrors />
                </FormField>
                <Button type="submit" class="w-full mt-2">Создать аккаунт</Button>
            </form>
        </Card.Content>
        <Card.Footer class="justify-center gap-1 text-center text-sm">
            У вас уже есть аккаунт?
            <a href="/login" class="underline">Войти</a>
        </Card.Footer>
    </Card.Root>
</div>

<style>
    :global(body) {
        @apply bg-muted/45;
    }
</style>