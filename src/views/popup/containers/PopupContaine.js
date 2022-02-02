import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Popup from '../components/Popup';
import { ActionCreators } from '../../../redux/popup/slice';

const PopupContaine = () => {
  const dispatch = useDispatch();
  const { visibility, selectedId } = useSelector((state) => state.popup);

  const location = useLocation();

  const onClose = () => {
    dispatch(ActionCreators.updateState({ visibility: false }));
    window.history.pushState(null, null, location.pathname);
  };

  if (!visibility) return null;

  return ReactDOM.createPortal(<Popup onClose={onClose} selectedId={selectedId} />, document.getElementById('popup'));
};

export default PopupContaine;
