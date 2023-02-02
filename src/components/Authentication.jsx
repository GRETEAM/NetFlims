import React from 'react'

import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useEffect } from "react";


const Authentication = ({setSessionStatus}) => {

    const supabase = createClient(
        import.meta.env.VITE_PROJECT_URL,
        import.meta.env.VITE_ANON_API_KEY
      );
      useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async (event) => {
          console.log("fsfs");
          if (event == "SIGNED_IN") {
            setSessionStatus("SIGNED_IN");
          } else {
            setSessionStatus("SIGNED_OUT");
          }
        });
        return () => {
          data.subscription.unsubscribe();
        };
      }, []);
      useEffect(() => {
        async function getUserData() {
          await supabase.auth.getUser().then((value) => {
            if (value?.data?.user == null) {
              setSessionStatus("SIGNED_OUT");
            } else {
              setSessionStatus("SIGNED_IN");
            }
          });
        }
        getUserData();
      }, []);

  return (
    <div className='container'>
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark"  />
    </div>

  )
}

export default Authentication