import React, { useState } from 'react';

type BaseProps = {
  primTitle: string;
  secTitle?: string;
};

type InjectedProps = {
  toggleStatus: boolean;
  toggle: () => void;
};

const Button = ({ primTitle, secTitile, toggle, toggleStatus }: any) => (
  <button onClick={toggle}>{toggleStatus ? primTitle : secTitile}</button>
);

const withToggle = <BaseProps extends InjectedProps>(
  PassedComponent: React.ComponentType<BaseProps>
) => {
  return (props: BaseProps) => {
    const [toggleStatus, toggle] = useState(false);

    return (
      <PassedComponent
        {...(props as BaseProps)}
        toggle={() => toggle(!toggleStatus)}
        toggleStatus={toggleStatus}
      />
    );
  };
};

const ToggleButton = withToggle(Button);

export default ToggleButton;
