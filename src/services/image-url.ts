const getCroppedImageUrl = (imageUrl: string) => {
  const index = imageUrl.indexOf("media/") + "media/".length;
  const croppedImg =
    imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index);
  return croppedImg;
};

export default getCroppedImageUrl;
