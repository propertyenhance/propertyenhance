declare namespace JSX {
  interface IntrinsicElements {
    "image-uploader": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      theme?: "light" | "dark";
      "max-files"?: string | number;
      preferences?: string;
      [key: string]: any; // Allows any other attributes
    };
  }
}
