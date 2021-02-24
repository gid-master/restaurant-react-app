import React, { useState } from 'react';
import ButtonStandard from '@/components/shared/buttons/ButtonStandard';
import './styles.scss';


type PwaRefreshProps = {
  clicked: () => void;
}

const PwaRefresh: React.FC<PwaRefreshProps> = (props:PwaRefreshProps) => {

  const [processing, setProcessing] = useState(false);

  const onRefreshClicked = () => {
    setProcessing(true);
    props.clicked();
  };

  return (
    <div className="pwa-new-content">
      {
        !processing &&
        <p className="description">
          Restaurant application has a new version available, click on the button to
          update it.
        </p>
      }

      {
          processing &&
          <p className="description">
            Please wait while we are updating your application with the newst version.
          </p>
      }
    
      <ButtonStandard
        icon="thumb_up"
        name="update right now"
        disabled={processing}
        center={true}
        clicked={onRefreshClicked}
      />
    </div>
  )
}

export default PwaRefresh;