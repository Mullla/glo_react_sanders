import { useState } from 'react';

export const useOrderConfirm = () => {
  const [openOrderConfirm, setOpenOrderConfirm] = useState(false);

  return { openOrderConfirm, setOpenOrderConfirm };
};
