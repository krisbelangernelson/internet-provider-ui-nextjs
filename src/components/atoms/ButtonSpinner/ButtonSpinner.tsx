import SpinnerIcon from '../SpinnerIcon/SpinnerIcon'

interface Props {
  onClick?: () => void
  isDisabled: boolean
  isLoading: boolean
  buttonLabel: string
  loadingLabel: string
  className?: string
}

export default function ButtonSpinner({ onClick, isDisabled, isLoading, buttonLabel, loadingLabel, ...rest }: Props) {
  let className = 'btn-primary'

  if (isDisabled) {
    className = 'btn-primary-disabled'
  }

  return (
    <button type="submit" className={className} onClick={onClick} disabled={isDisabled} {...rest}>
      {isLoading
        ? (
          <div className="flex flex-row items-center">
            <SpinnerIcon size="4" />
            <span className="ms-1">{loadingLabel}</span>
          </div>
        )
        : (<>{buttonLabel}</>)}
    </button>
  )
}
