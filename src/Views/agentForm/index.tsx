import { FormHero, FormTag } from "../../components/shared"
import FormInput from "../../components/shared/FormInput"
import { AuthButton } from "../../components/shared/button"
import { Container } from "../../components/shared/container"
import useForm from "../../hooks/useForm"
import MainLayout from "../../layout/MainLayout"


const AgentForm = () => {

    const initialState = {
        firstName:'',
        lastName:'',
        address: '',
        phone: '',
        email:'',
        location:''
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
                    <FormTag title="Personal Details" desc="This would help us assign an Errand to you. Ensure all details are correct."/>   

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
                        <FormInput
                            label={'Email Address'}
                            type={'email'}
                            name={'email'} 
                            value={values.email}
                            onChange={handleChange}
                            placeholder={'John'}
                            error={errors?.email}
                        />                
                        <FormInput
                            label={'Locations'}
                            type={'text'}
                            name={'location'} 
                            value={values.location}
                            onChange={handleChange}
                            placeholder={'Doe'}
                            error={errors?.location}
                        />       
                    </div>                 
                </div>

                <div className="w-full flex justify-center items-center">
                <AuthButton title={'Submit'}/>
                </div>

            </form>
        </Container>

    </MainLayout>
  )
}

export default AgentForm