import { config as loadConfig } from "https://deno.land/std@0.161.0/dotenv/mod.ts";

export const config = await loadConfig({
    export: true
});