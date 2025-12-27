import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'image-uploader': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        theme?: 'light' | 'dark';
        'max-files'?: string | number;
        preferences?: string;
        [key: string]: any; // For any other props
      };
    }
  }
}
