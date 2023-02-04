import { createClient } from "@supabase/supabase-js";
import { NavLink } from "react-router-dom";

function Modal({setSessionStatus}) {
    const supabase = createClient(
        import.meta.env.VITE_PROJECT_URL,
        import.meta.env.VITE_ANON_API_KEY
      );
      async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        setSessionStatus("SIGNED_OUT");
      }
  return (
    <article className="container-modal" style={{
        zIndex: 1000,
      }}>
      <h2 className="container-modal-title">Profil</h2>
        <NavLink to="/profile">
            fileName
        </NavLink>
      <button onClick={signOutUser}>Logout</button>
    </article>
  );
}

export default Modal;
