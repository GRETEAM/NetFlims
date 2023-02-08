import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Modal = ({ setSessionStatus }) => {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    // Add the listener to updates the style
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evt) => onSelectMode(evt.matches ? 'light' : 'dark'));

    // Setup to get the actuel theme, if there is a match apply on of them
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark');

    // Remove the listener
    return () => {
      window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', () => {});
    };
  }, []);

// console.log(user);
  const supabase = createClient(
    import.meta.env.VITE_PROJECT_URL,
    import.meta.env.VITE_ANON_API_KEY
  );

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    setSessionStatus("SIGNED_OUT");
  };

  const onSelectMode = (mode) => {
    setMode(mode);

    if (mode === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }

  return (
    <div className="container-modal">
      <div className="modal">
        {mode === "light" ? (
          <div
            className="modal-toggle"
            onClick={() => onSelectMode("dark")}
          >DARK</div>
        ) : (
          <div
            className="modal-toggle"
            onClick={() => onSelectMode("light")}
          >LIGHT</div>
        )}
        <NavLink to="/profile">Profile</NavLink>
        {/* <h2 className="container-modal-title">{user.username}</h2> */}
        <button onClick={signOutUser}>Logout</button>
      </div>
    </div>
  );
};

export default Modal;
