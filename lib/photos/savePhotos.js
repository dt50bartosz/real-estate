


export async function savePhotosS3( files) {

const savedPaths = [];
for (let i = 1; i <= 6; i++) {
  savedPaths.push(`uploads/${i}.jpg`);
}

  return savedPaths;
 

}
