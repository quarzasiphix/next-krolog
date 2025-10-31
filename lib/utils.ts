import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Normalizes a string for use in URLs by converting Polish diacritics to their Latin equivalents
 * and formatting the string to be URL-friendly.
 * @param str The string to normalize
 * @returns A URL-friendly string with Polish characters converted to their Latin equivalents
 */
export function normalizeForUrl(str: string): string {
  if (!str) return '';

  // Polish character mappings (must be done before NFD normalization)
  const polishMap: Record<string, string> = {
    'ą': 'a', 'Ą': 'A',
    'ć': 'c', 'Ć': 'C',
    'ę': 'e', 'Ę': 'E',
    'ł': 'l', 'Ł': 'L',
    'ń': 'n', 'Ń': 'N',
    'ó': 'o', 'Ó': 'O',
    'ś': 's', 'Ś': 'S',
    'ź': 'z', 'Ź': 'Z',
    'ż': 'z', 'Ż': 'Z',
  };

  // Replace Polish characters first
  let normalized = str;
  for (const [polish, latin] of Object.entries(polishMap)) {
    normalized = normalized.replace(new RegExp(polish, 'g'), latin);
  }

  return normalized
    // Break accented characters into base + diacritic
    .normalize('NFD')
    // Remove diacritic marks
    .replace(/[\u0300-\u036f]/g, '')
    // Replace any remaining non-letter/number characters (excluding spaces and hyphen) with a space
    .replace(/[^\p{L}\p{N}\s-]+/gu, ' ')
    // Convert underscores to spaces
    .replace(/_/g, ' ')
    // Collapse multiple spaces/hyphens into a single space
    .replace(/[\s-]+/g, ' ')
    // Trim leading/trailing whitespace
    .trim()
    // Replace spaces with hyphens
    .replace(/\s+/g, '-')
    // Convert to lowercase
    .toLowerCase();
}
