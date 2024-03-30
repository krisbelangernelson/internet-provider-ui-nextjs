import NavMenu from '@/components/molecules/NavMenu/NavMenu'

// TODO: auto login check
export default function Header() {
  // const { mutate: autoLoginCheck, isPending } = useMutation({
  //   mutationFn: async () => await customerService.autoLoginCheck(),
  //   onError: (error) => {
  //     showErrorNotification({ title: 'Auth Error', error, caller: 'AppRoutes' })
  //   },
  //   onSuccess: (customer) => {
  //     if (customer.accessToken !== undefined) {
  //       setCustomer(customer)
  //     }
  //   }
  // })

  // useEffect(() => {
  //   autoLoginCheck()
  // }, [])
  return (
    <header className="section-dark">
      <div className="flex flex-row">
        <div className="grow pt-4 lg:pt-2 p-2 min-h-20">
          <NavMenu />
        </div>
      </div>
    </header>
  )
}
