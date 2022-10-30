import React from 'react';
import { ref, getDatabase } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDFtECaxVLCLjelwpC11jl67dj4wr58Reo",
  authDomain: "groceries-14f1d.firebaseapp.com",
  databaseURL: "https://groceries-14f1d-default-rtdb.firebaseio.com",
  projectId: "groceries-14f1d",
  storageBucket: "groceries-14f1d.appspot.com",
  messagingSenderId: "988980470962",
  appId: "1:988980470962:web:10289a4f1d3cb7c63215ab",
  measurementId: "G-ZVMJD2KVKM"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const DatabaseList = () => {
  const [snapshots, loading, error] = useList(ref(database, '/food/'));

  return (
    <div>
      <p>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>List: Loading...</span>}
        {!loading && snapshots && (
          <React.Fragment>
            <span>
                {snapshots.map(v => (
                    <React.Fragment key={v.key}>
                        {v.val()["name"]}, Wanted by {v.val()["users"].join(", ")}
                    </React.Fragment>
                ))}
            </span>
          </React.Fragment>
        )}
      </p>
    </div>
  );
};
 
export default DatabaseList;