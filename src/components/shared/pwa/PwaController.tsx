/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import ModalBottomSheet from '@/components/shared/buttons/modals/ModalBottomSheet';
import { isApplicationInstalled, isDevelopmentMode, isIOS, vapIdKey } from '@/utils/EnvironmentUtil';
import { useDispatch, useSelector } from 'react-redux';
import { getShowInstall } from '@/store/ducks/settings/selector';
import { ShowModal, ShowInstall, ShowSnackbar } from '@/store/ducks/settings/actions';
import { PushPermission } from '@/store/ducks/user/effects';
import PwaInstall from './PwaInstall';
import PwaRefresh from './PwaRefresh';



const PwaContainer: React.FC = () => {

  const dispatch = useDispatch();
  const showInstall:boolean = useSelector(getShowInstall);

  const ios: boolean = isIOS();
  const developmentMode:boolean = isDevelopmentMode();
  const installed:boolean = isApplicationInstalled();


  const [registration, setRegistration] = useState(null);
  const [deferredPrompt, setDeferredPrompt] = useState(null);


  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event:Event) => handleInstall(event));
    window.addEventListener('online', () => handleOnline());
    window.addEventListener('offline', () => handleOffline());
    document.addEventListener('update', (event:Event) => handleUpdate(event));
    document.addEventListener('connection', () => handleConnection());
    document.addEventListener('permission', () => handlePermission());

    return () => {
      window.removeEventListener('beforeinstallprompt', (event:Event) => handleInstall(event));
      window.removeEventListener('online', () => handleOnline());
      window.removeEventListener('offline', () => handleOffline());
      document.removeEventListener('update', (event:Event) => handleUpdate(event));
      document.removeEventListener('connection', () => handleConnection());
      document.removeEventListener('permission', () => handlePermission());
    };
  }, [])


  useEffect(() => {
    if (showInstall) {
      dispatch(ShowModal({ id: 'install-modal', show: true }));
      dispatch(ShowInstall(false));
    }    
  }, [showInstall])

  

  const handleInstall = (event: Event) => {
    event.preventDefault();
    setDeferredPrompt(event);
  };

  const handleOnline = () => {
    dispatch(ShowSnackbar("Woop, you're back online again"));
  };

  const handleOffline = () => {
    dispatch(ShowSnackbar("Ops, You're currently offline"));
  };

  const handleUpdate = (event:any) => {
    setRegistration(event.detail.params);
    dispatch(ShowModal({ id: 'refresh-modal', show: true }));
  };

  const handleConnection = () => {
    dispatch(ShowSnackbar('No internet connection found.<br>But the applicaiton can be used in offline mode'));
  };

  const handlePermission = async () => {
    const request = await navigator.serviceWorker.getRegistration();
    request.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: vapIdKey(),
      })
      .then(sub => {
        dispatch(PushPermission(JSON.stringify(sub)));
      });
  };

  
  const onRefreshClicked = () => {
    const worker = registration.waiting;
    worker.postMessage({ action: 'SKIP_WAITING' });
    window.location.reload();
  };

  const onInstallClicked = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    await deferredPrompt.userChoise;
    setDeferredPrompt(null);

    dispatch(ShowModal({ show:false }));
  };



  return (
    <div className="pwa">
      <ModalBottomSheet id="install-modal" title="Install Application">
        <PwaInstall
          ios={ios}
          installed={installed || !deferredPrompt}
          developmentMode={developmentMode}
          clicked={onInstallClicked}
        />
      </ModalBottomSheet>

      <ModalBottomSheet id="refresh-modal" title="Update Application">
        <PwaRefresh clicked={onRefreshClicked} />
      </ModalBottomSheet>
    </div>
  )
}

export default PwaContainer;