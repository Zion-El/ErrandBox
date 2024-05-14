import { Checkbox, Popover, Tag } from "antd"
import { FormHero, FormTag } from "../../components/shared"
import FormInput from "../../components/shared/FormInput"
import { AuthButton } from "../../components/shared/button"
import { Container } from "../../components/shared/container"
import useForm from "../../hooks/useForm"
import MainLayout from "../../layout/MainLayout"
import type { GetProp } from 'antd';
import { useState } from "react"
import { Label } from "../../components/shared/typograph"
import { CheckboxValueType } from "antd/lib/checkbox/Group"
import ImageUploader from "../../components/shared/ImageUploaded"


const AgentForm = () => {

    const [locations, setLocations] = useState< CheckboxValueType[]>([])

    const initialState = {
        firstName:'',
        lastName:'',
        address: '',
        phone: '',
        email:'',
        location:''
    }
    const {values, handleChange, 
        // resetForm, 
        errors} = useForm(initialState)
    
    // const handleSubmit = (e) =>{
    //     e.preventDefault()
        
    //     const payload = {data: ecnrypted_values.encryptedData}

    // }    

    const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        setLocations(checkedValues)
      };

    const marketOptions = [
        { label: 'Ikeja', value: 'Ikeja' },
        { label: 'Lekki', value: 'Lekki' },
        { label: 'VI', value: 'VI' },
        { label: 'Ikoyi', value: 'Ikoyi' },
        { label: 'Ajah', value: 'Ajah' },
        { label: 'Festac', value: 'Festac' },
      ];

    const marketcontent = (
        <div className='flex flex-col w-[300px]'>
            <Checkbox.Group options={marketOptions} onChange={onChange} />
        </div>
      );


  return (
    <MainLayout>
        <FormHero/>
        <Container>
            
            <form >

                <div>
                    <FormTag title="Personal Details" desc="This would help us assign an Errand to you. Ensure all details are correct."/>   

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12  md:px-10 lg:px-20 py-8">
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


                        <Popover content={marketcontent} title="Select your Service Area Location" className="errand-type">
                            <div>

                                <div className="relative">
                                    <Label text={'Market Location'} />
                                    <div className={`h-[60px] px-[12px] border focus:border-[#FE5000] 'border-[#CBD5E1] rounded-lg outline-none w-full`}>
                                        {
                                            locations.length > 0 ? locations?.map((i:any)=><Tag>{i}</Tag>) :''
                                        }
                                    </div>
                   
                                </div>
                                   
                            </div>


                        </Popover>

                        {/* <Popover content={marketcontent} title="Select your Service Area Location" className="errand-type">
                            <div>
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


                        </Popover>       */}


                    </div>  
                        <div className=" md:px-10 lg:px-20 w-full flex flex-col md:flex-row justify-between gap-6 items-center mb-10"> 
                            <div className="w-full lg:w-[45%]">
                                <ImageUploader id="ninUpload" title="NIN"/>
                            </div>
                            <div className="w-full lg:w-[45%]">
                                <ImageUploader id="passportUpload" title="Passport"/>
                            </div>

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