import "./Profile.css";
import { useEffect, useState } from "react";
import { editName, getProfile } from "../../api/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProfile } from "../../store/reducers/userReducer";

function Profile() {
  const [user, setUser] = useState();
  const [newFirstName, setNewFirstName] = useState();
  const [newLastName, setNewLastName] = useState();
  const [formVisible, setFormVisible] = useState(false);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  /**
   * Get user profile and update data in Redux store
   */
  const saveUserInfo = () => {
    if (newFirstName && newLastName) {
      editName(newFirstName, newLastName, token).then(() => fetchUserInfo());
    }
  };

  const fetchUserInfo = () => {
    getProfile(token).then((data) => {
      setUser(data.body);
      dispatch(setProfile(data.body));
    });
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user ? user.firstName + " " + user.lastName + " !" : " "}
        </h1>
        {!formVisible ? (
          <button onClick={() => setFormVisible(true)} className="edit-button">
            Edit Name
          </button>
        ) : (
          <div>
            <div>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="input"
                onChange={(userinput) =>
                  setNewFirstName(userinput.target.value)
                }
              />

              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="input"
                onChange={(userinput) => setNewLastName(userinput.target.value)}
              />
            </div>
            <div>
              <button
                disabled={!newFirstName || !newLastName}
                className="edit-button"
                onClick={() => saveUserInfo()}
              >
                Save
              </button>
              <button
                onClick={() => setFormVisible(false)}
                className="edit-button"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
