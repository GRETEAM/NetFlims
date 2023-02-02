import React from 'react'

import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useEffect } from "react";


const Authentication = ({setSessionStatus}) => {

    const supabase = createClient(
        "https://vdqnrwraaybulbcxpyus.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkcW5yd3JhYXlidWxiY3hweXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5Mjc2MTcsImV4cCI6MTk5MDUwMzYxN30.FGb0DgDMenEMyZQbL5L-WYvLET04QNyU8_vVE0OZekk"
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