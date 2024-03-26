interface ErrorProps {
  title: string
  message?: string
}

export default function Error({ title, message }: ErrorProps) {
  return (
    <div className="container text-center mx-auto mt-6">
      <div className="flex-col">
        <div className="flex-row">{title}</div>
        {message && (
          <div className="flex-row">
            <div>{message}</div>
          </div>
        )}
      </div>
    </div>
  )
}
