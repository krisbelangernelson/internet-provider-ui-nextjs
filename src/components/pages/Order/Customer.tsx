import CustomerForm from '@/components/molecules/CustomerForm/CustomerForm'
import AlreadyCustomer from '@/components/atoms/AlreadyCustomer/AlreadyCustomer'

export default function Customer() {
  return (
    <div className="grid justify-center my-6">
      <AlreadyCustomer />
      <CustomerForm />
      <AlreadyCustomer />
    </div>
  )
}
