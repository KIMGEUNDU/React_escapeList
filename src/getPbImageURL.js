export const getPbImageURL = (item, fileName = 'image') => {
  return `https://escape.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
};
