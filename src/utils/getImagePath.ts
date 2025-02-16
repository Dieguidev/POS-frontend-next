export function getImagePath(image: string) {
  const cloudinaryBaseUrl = 'https://res.cloudinary.com';
  if (image.startsWith(cloudinaryBaseUrl)) {
    return image;
  } else {
    return `${process.env.API_URL}/img/${image}`;
  }
}
