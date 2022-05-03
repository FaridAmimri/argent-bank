import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ClapSpinner } from 'react-spinners-kit'
import { getUserProfile, updateUserProfile } from '../../services'
import {userSelector, displayUser, disableLoader } from '../../features/userSlice'

function Welcome() {
  const [editFormIsOpen, setEditFormIsOpen] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')

  const dispatch = useDispatch()

  const user = useSelector(userSelector)
  const token = user.token

  useEffect(() => {
    getUserProfile({ token: token }).then((res) => {
      const firstName = res.firstName
      const lastName = res.lastName
      setNewFirstName(firstName)
      setNewLastName(lastName)
      dispatch(displayUser({ firstName, lastName }))
      dispatch(disableLoader())
    })
  }, [])

  const handleEdit = () => {
    setEditFormIsOpen(!editFormIsOpen)
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile({
      token: token,
      firstName: newFirstName,
      lastName: newLastName,
    }).then(() => {
      getUserProfile({ token: token }).then((res) => {
        const firstName = res.firstName
        const lastName = res.lastName
        dispatch(displayUser({ firstName, lastName }))
        dispatch(disableLoader())
        handleEdit();
      })
    })
  }

  const handleCancel = () => {
    setEditFormIsOpen(!editFormIsOpen)
  }

  return (
    <WelcomeWrapper className="welcome">
      {user.isLoading && (
        <div className="spinner">
          <ClapSpinner size={50} />
        </div>
      )}
      {!user.isLoading && (
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}
        </h1>
      )}
      {!editFormIsOpen && (
        <button className="edit-button" onClick={handleEdit}>
          Edit Name
        </button>
      )}
      {editFormIsOpen && (
        <EditForm className="edit-form">
          <div className="input-wrapper">
            <input
              type="text"
              id="firstname"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              required
            ></input>
            <input
              type="text"
              id="lastname"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              required
            ></input>
          </div>
          <div className="button-wrapper">
            <button className="update-button" onClick={handleUpdate}>
              Update
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </EditForm>
      )}
    </WelcomeWrapper>
  )
}

export default Welcome

const WelcomeWrapper = styled.div`
  color: #fff;
  padding: 0.1rem 0 2rem;
  .edit-button {
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
  }
  .spinner {
    display: flex;
    justify-content: center;
    margin: 25px 0;
  }
`
const EditForm = styled.form`
  width: 380px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;

  .input-wrapper {
    display: flex;
    justify-content: space-between;
    input {
      padding: 10px;
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: space-between;
    .update-button {
      border-color: #00bc77;
      background-color: #00bc77;
      color: #fff;
      font-weight: bold;
      padding: 10px;
      width: 49%;
    }
    .cancel-button {
      border-color: #e11b1b;
      background-color: #e11b1b;
      color: #fff;
      font-weight: bold;
      padding: 10px;
      width: 49%;
    }
  }
`
