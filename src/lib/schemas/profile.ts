import { z } from "zod";

/** Defines the schema for shared profile metadata and copy. */
export const ProfileSchema = z.strictObject({
  name: z.string(),
  heroTagline: z.string(),
  shortTitle: z.string(),
  summary: z.string(),
  aboutLead: z.string(),
  aboutBody: z.string(),
  websiteSummary: z.string(),
  keywords: z.array(z.string()),
  email: z.string().email(),
  mobile: z.string(),
  whatsapp: z.string(),
  github: z.string().url(),
  linkedin: z.string().url(),
  huggingface: z.string().url(),
  medium: z.string().url(),
  location: z.string(),
  coordinates: z.string(),
});

/** Defines the profile data type inferred from ProfileSchema. */
export type Profile = z.infer<typeof ProfileSchema>;
