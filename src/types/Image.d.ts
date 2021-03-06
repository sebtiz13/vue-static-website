interface ImageSize {
  width: number;
  height: number;
}

export interface Image {
  dataUri: string;
  mimeType: string;
  size: ImageSize;
  sizes: string;
  src: string;
  srcset: string[];
  type: string;
}
