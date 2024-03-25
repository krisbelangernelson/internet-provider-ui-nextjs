interface ButtonToggleProps {
  active: boolean
  label: string
  name: string
  full?: boolean
  onClick: (selection: string) => void
}

export default function ButtonToggle(props: ButtonToggleProps) {
  const { active, label, name, onClick, full } = props

  return (
    <button
      className={`${active ? 'btn-primary' : 'btn-secondary'} ${full === true ? 'w-full' : ''} text-2xl h-[3rem]`}
      onClick={() => {
        onClick(name)
      }}
    >
      {label}
    </button>
  )
}
