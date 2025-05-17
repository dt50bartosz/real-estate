import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

 
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\_]+/g, '-')         
    .replace(/[^\w\-]+/g, '')          
    .replace(/\-\-+/g, '-');          
}


export function slugToTitle(slug) {
  if (!slug) return "";
  return slug
    .split('-') // Split by dashes
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join words with space
}


export function normalizeTitle(title) {
  return title
    .toLowerCase()                          // Make everything lowercase first
    .trim()                                 // Remove leading/trailing spaces
    .replace(/\s+/g, ' ')                   // Replace multiple spaces with a single space
    .split(' ')                             // Split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(' ');                             // Join back into a single string
}


export function normalizeTitleUrl(title) {
  return title
    .replace(/-/g, ' ')                  // Replace hyphens with spaces
    .trim()                              // Remove leading/trailing spaces
    .replace(/\s+/g, ' ')                // Collapse multiple spaces
    .split(' ')                          // Split into words
    .map(word =>                         // Capitalize each word
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');                          // Join back into a string
}

export function cleanPhotoString(photos) {
  return photos
    .replace(/\[|\]/g, '')         // Remove brackets
    .replace(/"/g, '')             // Remove quotes
    .split(',')                    // Split by commas
    .map(photo => photo.trim());   // Trim spaces
}

export function convertToTowns(text) {
  return text
    .split('_')                 // Split string at underscores
    .map(word =>                // Capitalize each word
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');                 // Join with spaces
}

export function sanitizePropertyData(formData, photoUrls) {
  return {
    propertyId: String(formData.get('propertyId') || ''),
    title: String(formData.get('title') || ''),
    orientation: String(formData.get('orientation') || ''),
    propertyType: String(formData.get('propertyType') || ''),
    propertyCondition: String(formData.get('propertyCondition') || ''),
    usefulArea: Number(formData.get('usefulArea')) || 0,
    totalArea: Number(formData.get('totalArea')) || 0,
    bedrooms: Number(formData.get('bedrooms')) || 0,
    bathrooms: Number(formData.get('bathrooms')) || 0,
    floor: Number(formData.get('floor')) || 0,
    yearOfConstruction: Number(formData.get('yearOfConstruction')) || null,
    price: Number(formData.get('price')) || 0,
    ibi: Number(formData.get('ibi')) || 0,
    community: Number(formData.get('community')) || 0,
    description: String(formData.get('description') || ''),
    town: String(formData.get('town') || ''),
    postalCode: String(formData.get('postalCode') || ''),
    street: String(formData.get('street') || ''),
    latitude: Number(formData.get('latitude')) || 0,
    longitude: Number(formData.get('longitude')) || 0,
    // For array items[] - FormData.get only returns the first value, so getAll:
    items: formData.getAll('items[]') || [],
    sellerName: String(formData.get('sellerName') || ''),
    telephone: String(formData.get('telephone') || ''),
    photos: photoUrls,
  };
}
