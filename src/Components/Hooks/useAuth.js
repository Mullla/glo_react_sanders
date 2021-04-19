import { useState, useEffect } from 'react';

export function useAuth(authFirebase) {
  // когда захожим изначально мы не зарегистрированы
  // authentication - объект, который хранит все жданные пользователя, который авторизовался
  const [authentication, setAuthentication] = useState(null);

  const auth = authFirebase();
  const provider = new authFirebase.GoogleAuthProvider();

  // функция, которая запускает авторизацию
  const logIn = () => auth.signInWithPopup(provider);

  // возвращает промис
  const logOut = () => auth.signOut().catch(err => console.log(err));

  // запускается при каждом вызове компонента
  // нужен для побочных эффектов, например запросы, запрос напрямую в dom, работа с сервером, локалсторадж
  // вторым аргументом передается массив, который запускает коллбек-функцию при каждом перерендере в завистмости от какого-то значения, если это значение обновляется, тогда useEffect срабатывает
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setAuthentication(user);
      } else {
        setAuthentication(null);
      }
    });
  }, [authentication]);

  return { authentication, logIn, logOut };
}
