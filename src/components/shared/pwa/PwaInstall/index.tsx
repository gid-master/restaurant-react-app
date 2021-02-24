import React from 'react';
import ButtonStandard from '@/components/shared/buttons/ButtonStandard';
import './styles.scss';

type PwaInstallProps = {
  ios: boolean;
  installed: boolean;
  developmentMode: boolean;
  clicked: () => void;
}

const PwaInstall: React.FC<PwaInstallProps> = (props:PwaInstallProps) => (
  <div className="pwa-install">

    {
        props.developmentMode &&
        <p className="description">
          You're in development mode, build your application in production mode in
          order to test all PWA functionalities.
        </p>
    }

    {
        !props.developmentMode && props.installed &&
        <p className="description">
          You have already installed the application and you can access it through
          the home screen icon in your device.
        </p>
    }

    {
        !props.developmentMode && !props.installed && props.ios &&
        <p className="description">
          IOS devices have a different behaviour for PWA applications, click on
          add to home screen in your browser settings.
        </p>
    }

    {
        !props.developmentMode && !props.installed && !props.ios &&
        <p className="description">
          Install the application and you can access it through the home screen
          icon in your device.
        </p>
    }
        
    <ButtonStandard
      icon="touch_app"
      name="install application"
      disabled={props.installed || props.developmentMode || props.ios}
      center={true}
      clicked={props.clicked}
    />
  </div>
)

export default PwaInstall;