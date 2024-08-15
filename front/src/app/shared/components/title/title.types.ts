const levels = [1, 2] as const;

export type Level = (typeof levels)[number];

const variants = ['heading', 'heading-2'] as const;

export type Variant = (typeof variants)[number];
