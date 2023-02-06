import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "../components/Avatar";

const Profile = () => {
  const user = useSelector((store) => store.reducerUser);
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState();
  const [avatar_url, setAvatarUrl] = useState();
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUsername(user.username);
    setWebsite(user.website);
    setAvatarUrl(user.avatar_url);
  }, [user]);
  const supabase = createClient(
    import.meta.env.VITE_PROJECT_URL,
    import.meta.env.VITE_ANON_API_KEY
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("profiles")
      .update([{ username, website, avatar_url }])
      .eq("id", user.id);

      console.log(error);
      if (error?.code == 23505){
        setError("This username is already taken")
        alert("Username already taken")
      }
  };

  return (
    <main className="container">
      <section className="profile">
        <div className="profile-container">
          <div className="profile-infos">
            <h1 className="title">Profil of {username}</h1>
            <div className="profile-infos-form">
              <form>
                <input
                  type="text"
                  placeholder={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </form>
            </div>
          </div>
          <Avatar
            url={avatar_url}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
              handleSubmit({ username, website, avatar_url: url });
            }}
          />
        </div>
        <button className="profile-infos-form-button button-red" onClick={handleSubmit}>
          Update the profil
        </button>
      </section>
    </main>
  );
};

export default Profile;
