export const mockData = (files: File[]) => {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: 'file',
        type: file.type,
      })),
      types: ['Files'],
    },
  };
};
