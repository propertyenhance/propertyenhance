declare namespace JSX {
  interface IntrinsicElements {
    "image-uploader": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      theme?: string;
      "max-files"?: string;
      preferences?: string;
      name?: string;
      required?: boolean;
    };
  }
}
