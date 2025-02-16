export function getImagePath(image: string) {
  const cloudinaryBaseUrl = 'https://res.cloudinary.com';
  if (image.startsWith(cloudinaryBaseUrl)) {
    return image;
  } else {
    if(process.env.API_URL){
      return `${process.env.API_URL}/img/${image}`;
    } else {
      return `${process.env.NEXT_PUBLIC_API_URL}/img/${image}`;

    }
  }
}

