import { FormHero, FormTag } from "../../components/shared"
import FormInput from "../../components/shared/FormInput"
import { AuthButton } from "../../components/shared/button"
import { Container } from "../../components/shared/container"
import useForm from "../../hooks/useForm"
import MainLayout from "../../layout/MainLayout"


const CustomerForm = () => {

    const initialState = {
        firstName:'',
        lastName:'',
        address: '',
        phone: '',
    }
    const {values, handleChange, resetForm, errors} = useForm(initialState)
    
    // const handleSubmit = (e) =>{
    //     e.preventDefault()
        
    //     const payload = {data: ecnrypted_values.encryptedData}

    // }    

  return (
    <MainLayout>

        <Container>
            <FormHero/>
            <form >

                <div>
                    <FormTag title="Personal Details" desc="This would help us assign you to an Agent easily"/>   

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 px-5 md:px-10 lg:px-20 py-8">
                        <FormInput
                            label={'First name'}
                            type={'text'}
                            name={'firstName'} 
                            value={values.firstName}
                            onChange={handleChange}
                            placeholder={'John'}
                            error={errors?.firstName}
                        />                
                        <FormInput
                            label={'Last name'}
                            type={'text'}
                            name={'lastName'} 
                            value={values.lastName}
                            onChange={handleChange}
                            placeholder={'Doe'}
                            error={errors?.lastName}
                        />       
                        <FormInput
                            label={'Address'}
                            type={'text'}
                            name={'address'} 
                            value={values.address}
                            onChange={handleChange}
                            placeholder={'John'}
                            error={errors?.address}
                        />                
                        <FormInput
                            label={'Phone'}
                            type={'text'}
                            name={'phone'} 
                            value={values.phone}
                            onChange={handleChange}
                            placeholder={'Doe'}
                            error={errors?.phone}
                        />       
                    </div>                 
                </div>
                <div>
                    <FormTag title="Errand Details" desc="Tell us what you want to get and we’ll get you and Agent"/>                    
                </div>


                <div className="w-full flex justify-center items-center">
                <AuthButton title={'Submit'}/>
                </div>

            </form>
        </Container>

    </MainLayout>
  )
}

export default CustomerForm