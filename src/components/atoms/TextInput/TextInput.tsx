'use client'

import { ChangeEvent } from 'react'

interface TextInputProps {
  label: string
  name: string
  type: string
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  isValid?: boolean
  isInvalid?: boolean
  feedback?: string
}

export default function TextInput(props: TextInputProps) {
  const { label, name, type, placeholder, onChange, value, isValid, isInvalid, feedback } = props

  let color = 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
  if (isValid) {
    color = 'bg-green-50 border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500 dark:border-green-500'
  } else if (isInvalid) {
    color = 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
  }

  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} className={`border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${color}`} onChange={onChange} value={value} />
      {isValid && feedback && <p className="mt-2 text-sm text-green-600 dark:text-green-500">{feedback}</p>}
      {isInvalid && feedback && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{feedback}</p>}
    </div>
  )
}
