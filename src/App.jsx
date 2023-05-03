import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [faceio, setFaceio] = useState(null);

  useEffect(() => {
    setFaceio(new faceIO("fioae2b5"));
  }, []);

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        },
      });

      console.log(
        ` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Face Authentication System</h1>
      <div>
        <img src="face.jpg" alt="" />
      </div>
      <button onClick={handleSignIn}>Sign-in</button>
      <button onClick={handleLogIn}>Log-in</button>
    </section>
  );
}

export default App;
