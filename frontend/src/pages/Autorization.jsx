import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Authorization() {
    // gets access to query parameters
  const [searchParams] = useSearchParams();

    // does redirecting
  const navigate = useNavigate();

  useEffect(() => {

    // http code part
    const code = searchParams.get('code');

    // send info to closed window
      const windowParams = new URLSearchParams(window.location.search);

    // user has logged in before
    if (code) {
      // Send authorization code to backend to handle information
      fetch('https://main.d3a17xoen6fcqd.amplifyapp.com/collab/oauth/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      // send the code in the request body
        body: JSON.stringify({ code })
      })

        .then(res => res.json())
        .then(data => {

          console.log("it reaches here at some point");
          // Store token if backend has nothing
          localStorage.setItem('googleAccessToken', data.accessToken);
          localStorage.setItem('googleRefreshToken', data.refreshToken)
          
          // close window
          window.opener.postMessage({ token: true }, "*");
          window.close();
        })
        .catch(err => {

          console.error('OAuth failed:', err);
          // navigate back if autorization fails
          navigate('/meeting/host');
        });

    // no login done before:
    } else {

      // Redirect information
        // CHANGE TO .ENV
      const clientId = '370124012666-uo0pug6llq6skbsug6j2hqb55grbl108.apps.googleusercontent.com';
      const redirectUri = `${window.location.origin}/meeting/host/oauth`;

      const scope = 'https://www.googleapis.com/auth/calendar.events';
      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&access_type=offline`;
      
      // send information back on what to open window to
      window.location.href = googleAuthUrl;
    }
  }, [searchParams, navigate]);

  return <div>Getting User Information</div>;
}