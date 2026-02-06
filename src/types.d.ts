declare module 'react-tilt' {
  import { ComponentType, HTMLAttributes } from 'react';
  
  interface TiltProps extends HTMLAttributes<HTMLDivElement> {
    options?: {
      max?: number;
      scale?: number;
      speed?: number;
      glare?: boolean;
      'max-glare'?: number;
    };
  }
  
  const Tilt: ComponentType<TiltProps>;
  export default Tilt;
}

declare module 'react-vertical-timeline-component' {
  import { ComponentType, ReactNode } from 'react';
  
  interface VerticalTimelineProps {
    children?: ReactNode;
    animate?: boolean;
    className?: string;
    layout?: '1-column' | '1-column-left' | '2-columns';
    lineColor?: string;
  }
  
  interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    visible?: boolean;
  }
  
  export const VerticalTimeline: ComponentType<VerticalTimelineProps>;
  export const VerticalTimelineElement: ComponentType<VerticalTimelineElementProps>;
}
