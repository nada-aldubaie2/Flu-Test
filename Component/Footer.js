import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default function Footer () {
  return (
    <footer className="footer bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-t-3xl text-teal-300 py-4 md:text-xl ">
    <p className="text-lg text-center ">Developed by <NavLink className="hover:text-xl hover:text-cyan-600" to="https://x.com/nadcs0?t=tqzis1FztB7CTBk8HfE5yA&s=09">Nada Aldubaie </NavLink>©2023🌟</p>
  </footer>
  );
}
