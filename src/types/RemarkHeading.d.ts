export interface RemarkHeading {
  depth: number;
  value: string;
  anchor: string;
}

export interface HeadingElement extends RemarkHeading {
  element: HTMLElement;
}
