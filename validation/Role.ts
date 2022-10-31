import { z } from "https://deno.land/x/zod@v3.19.1/mod.ts";

export const Role = z.object({
    name: z.string(),
}).required();