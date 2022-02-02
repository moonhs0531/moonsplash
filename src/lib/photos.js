export const chunkPhotos = (data) => {
  const photoGroups = [[], [], []];
  const groupHeight = [0, 0, 0];
  for (let i = 0; i < data.length; i++) {
    const minHeightIndex = groupHeight.indexOf(Math.min(...groupHeight));
    photoGroups[minHeightIndex].push(data[i]);
    groupHeight[minHeightIndex] += data[i].height / data[i].width;
  }
  return photoGroups;
};
