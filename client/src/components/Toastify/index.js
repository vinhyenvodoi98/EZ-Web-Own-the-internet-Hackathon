import React, { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toastify({ status, message }) {
  useEffect(() => {
    if (status === 1) {
      toast.success(`🦄 ${message}`);
    } else if (status === 2) {
      toast.error(`🦄 ${message}`);
    }
  }, [status, message]);
  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </div>
  );
}
