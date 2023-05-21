import React from 'react';
import ReactDom from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
};

class Portal extends React.Component<PortalProps> {
  private el: HTMLDivElement = document.createElement('h2');

  public componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  public render(): React.ReactElement<PortalProps> {
    return ReactDom.createPortal(this.props.children, this.el);
  }
}

export default Portal;
