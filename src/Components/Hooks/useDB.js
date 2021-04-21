import { useState, useEffect } from 'react';

export const useDB = database => {
  const [db, setdb] = useState(null);

  useEffect(() => {
    const dbRef = database.ref('goods');
    dbRef.on('value', snapshot => {
      setdb(snapshot.val());
    });
  }, [database]);

  return db;
};
