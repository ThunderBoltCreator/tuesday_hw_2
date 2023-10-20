import {KeyboardEvent} from 'react'
import {ChangeEvent} from 'react'
import {SetStateAction} from 'react'
import {Dispatch} from 'react'
import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
   users: UserType[]
   addUserCallback: (name: string) => void
}

// export const checkName = (name: string) => {
//
// }

export const pureAddUser = (name: string, setError: Dispatch<SetStateAction<string>>, setName: Dispatch<SetStateAction<string>>, addUserCallback: (name: string) => void) => {
   // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (!name.trim().length) {
        setError('Ошибка! Введите имя!')
    } else {
        setName('')
        addUserCallback(name)
    }
}

export const pureOnBlur = (name: string, setError: Dispatch<SetStateAction<string>>) => {
    if (!name.trim().length) {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => {
   if(e.key === 'Enter') {
      addUser()
   }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                    users,
                                                                    addUserCallback
                                                                 }) => {
   // деструктуризация пропсов
   const [name, setName] = useState('') // need to fix any
   const [error, setError] = useState('') // need to fix any

   const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.currentTarget.value)

      error && setError('')
   }

   const addUser = () => {
      pureAddUser(name, setError, setName, addUserCallback)
   }

   const onBlur = () => {
      pureOnBlur(name, setError)
   }

   const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
      pureOnEnter(e, addUser)
   }

   const totalUsers = users.length
   const lastUserName = users[totalUsers - 1].name

   return (
      <Greeting
         name={name}
         setNameCallback={setNameCallback}
         addUser={addUser}
         onBlur={onBlur}
         onEnter={onEnter}
         error={error}
         totalUsers={totalUsers}
         lastUserName={lastUserName}
      />
   )
}

export default GreetingContainer
