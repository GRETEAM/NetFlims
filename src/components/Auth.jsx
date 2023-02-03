import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react'

export default function Auth({setSessionStatus}) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const supabase = createClient(
    import.meta.env.VITE_PROJECT_URL,
    import.meta.env.VITE_ANON_API_KEY
  );

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event) => {
      console.log("test");
      console.log(data)
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
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">Supabase + React</h1>
        <p className="description">Sign in via magic link with your email below</p>
        {loading ? (
          'Sending magic link...'
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  )
}