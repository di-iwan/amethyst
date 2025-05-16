<script>
  const plans = [
    {
      name: "Starter",
      price: 19,
      description: "Get 20 AI-generated portraits with 2 unique styles and filters.",
      features: [
        "5 hours turnaround time",
        "20 AI portraits",
        "Choice of 2 styles",
        "Choice of 2 filters",
        "2 retouch credits",
      ],
      buttonText: "Get 20 portraits in 5 hours",
    },
    {
      name: "Advanced",
      price: 29,
      isRecommended: true,
      description: "Get 50 AI-generated portraits with 5 unique styles and filters.",
      features: [
        "3 hours turnaround time",
        "50 AI portraits",
        "Choice of 5 styles",
        "Choice of 5 filters",
        "5 retouch credits",
      ],
      buttonText: "Get 50 portraits in 3 hours",
      isPopular: true,
    },
    {
      name: "Premium",
      price: 49,
      description: "Get 100 AI-generated portraits with 10 unique styles and filters.",
      features: [
        "1-hour turnaround time",
        "100 AI portraits",
        "Choice of 10 styles",
        "Choice of 10 filters",
        "10 retouch credits",
      ],
      buttonText: "Get 100 portraits in 1 hour",
    },
  ];
</script>

<div class="min-h-screen flex flex-col items-center justify-center py-12 px-6">
  <h1 class="text-5xl font-bold text-center tracking-tight">Pricing</h1>
  <div class="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
    {#each plans as plan}
      <div
        class="relative border p-7 rounded-xl {plan.isPopular ? 'border-2 border-gray-500' : 'border-gray-200'}"
      >
        {#if plan.isPopular}
          <span
            class="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded"
          >
            Most Popular
          </span>
        {/if}
        <h3 class="text-lg font-medium">{plan.name}</h3>
        <p class="mt-2 text-4xl font-bold">${plan.price}</p>
        <p class="mt-4 text-gray-500">{plan.description}</p>
        <hr class="my-6 border-gray-200" />
        <ul class="space-y-2">
          {#each plan.features as feature}
            <li class="flex items-start gap-2">
              <svg
                class="h-4 w-4 mt-1 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          {/each}
        </ul>
        <button
          class="w-full mt-6 py-2 px-4 rounded-lg {plan.isPopular
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'border border-gray-300 text-gray-700 hover:bg-gray-100'}"
        >
          {plan.buttonText}
        </button>
      </div>
    {/each}
  </div>
</div>