<script lang="ts">
    import { goto } from "$app/navigation";
    let email = "";
    let password = "";
    let error = "";

    async function register() {
        error = "";
        const response = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        if (!response.ok) {
            error = result.error || "Ошибка регистрации";
            return;
        }
        goto("/");
    }
</script>

<div class="flex items-center justify-center min-h-screen">
    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <div class="flex justify-center mb-4">
            <div class="bg-gray-700 p-3 rounded-full">
                <svg class= /></svg>
            </div>
        </div>
        <h2 class="text-white text-xl font-semibold text-center mb-6">Sign up for Shadcn UI Blocks</h2>
        <button class="w-full bg-white text-gray-900 py-2 rounded flex items-center justify-center mb-4">
            <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-5 h-5 mr-2" />
            Continue with Google
        </button>
        <div class="flex items-center my-4">
            <div class="flex-grow border-t border-gray-600"></div>
            <span class="text-gray-400 mx-2">OR</span>
            <div class="flex-grow border-t border-gray-600"></div>
        </div>
        <form on:submit|preventDefault={register}>
            <div class="mb-4">
                <label class="text-gray-400 block mb-1">Email</label>
                <input type="email" bind:value={email} class="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none" required />
            </div>
            <div class="mb-4">
                <label class="text-gray-400 block mb-1">Password</label>
                <input type="password" bind:value={password} class="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none" required />
            </div>
            {#if error}
                <p class="text-red-500 text-sm mb-4">{error}</p>
            {/if}
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded">Continue with Email</button>
        </form>
        <p class="text-gray-400 text-center text-sm mt-4">Already have an account? <a href="/login" class="text-blue-400">Log in</a></p>
    </div>
</div>

  