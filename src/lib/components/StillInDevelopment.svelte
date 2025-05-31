<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Card.Root class="w-full max-w-sm text-center">
  <Card.Header>
    <Card.Title class="text-2xl">Страница в разработке</Card.Title>
    <Card.Description>Мы работаем над этим. Пожалуйста, загляните позже!</Card.Description>
  </Card.Header>
  <Card.Content class="flex justify-center">
    <span class="text-4xl">🚧</span>
  </Card.Content>
  <Card.Footer>
    <Button class="w-full" on:click={() => history.back()}>Вернуться назад</Button>
  </Card.Footer>
</Card.Root>