import { config as loadConfig, configSync } from "https://deno.land/std@0.161.0/dotenv/mod.ts";

export const config = configSync({
    export: true,
});