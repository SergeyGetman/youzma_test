import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonElement from './button/ButtonElement';
import { getTransports } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { addDataPages, getStatus } from '../store/globalSlice';
import { AccountPagesState } from '../types';

const AddPage = () => {
  const notify = () => toast('Wow so easy!');
  const [showNotif, setShowNotif] = useState(false);
  const stat = useSelector((state: AccountPagesState | any) => state.globalState.status);

  const dispatch = useDispatch();

  useEffect(() => {
    getTransports().then((response) => {
      const status = response.status;
      //@ts-ignore
      dispatch(getStatus(status, response.status));
      //@ts-ignore
      dispatch(addDataPages(response.data, response));
    });
    if (stat === '200') {
      setShowNotif(true);
    }
  }, [dispatch, showNotif]);
  return (
    <>
      <ButtonElement onClick={notify}>Notify!</ButtonElement>
      {showNotif ?? <ToastContainer />}
    </>
  );
};

export default AddPage;
