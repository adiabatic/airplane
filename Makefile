
run:
	deno run   --lock=lock.json --cached-only --allow-net mod.ts
initial-setup:
	deno cache --lock=lock.json --lock-write  deps.ts
setup:
	deno cache --lock=lock.json --reload      deps.ts
