import { z } from "zod";

export const BusinessCardText = z.object({
  id: z.number(),
  type: z.literal("text"),
  x: z.number().int(),
  y: z.number().int(),
  text: z.string(),
  color: z.string().regex(/^#[0-9a-f]{6}$/i),

  // Optional
  fontSize: z.number().int().positive().optional(),
  fontWeight: z.number().int().positive().optional(),
  textAlign: z
    .union([z.literal("left"), z.literal("center"), z.literal("right")])
    .optional(),
  lineHeight: z.number().int().positive().optional(),
  letterSpacing: z.number().int().positive().optional(),
  textDecoration: z
    .union([
      z.literal("none"),
      z.literal("underline"),
      z.literal("line-through"),
    ])
    .optional(),
  fontStyle: z
    .union([z.literal("normal"), z.literal("italic"), z.literal("oblique")])
    .optional(),
  fontFamily: z.string().optional(),
});

export const BusinessCardImage = z.object({
  type: z.literal("image"),
  x: z.number().int().positive(),
  y: z.number().int().positive(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  src: z.string(),
});

export const BusinessCardValidator = z.object({
  id: z.number(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  backgroundColor: z.string().regex(/^#[0-9a-f]{6}$/i),
  children: z.array(z.union([BusinessCardText, BusinessCardImage])),
});

export type BusinessCard = z.infer<typeof BusinessCardValidator>;
