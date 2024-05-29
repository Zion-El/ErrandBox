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
import API from "../../utils/api"
import BasicModal from "../../components/shared/modal"
import Loader from "../../components/shared/Loader"


const AgentForm = () => {

    const [locations, setLocations] = useState< CheckboxValueType[]>([])
    const [NINUrl, setNINUrl] = useState<File | null>(null);
    const [passportUrl, setPassportUrl] = useState<File | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);

    // let NINUrl:File;

    const initialState = {
        firstName:'',
        lastName:'',
        address: '',
        phone: '',
        email:'',
        location:''
    }
    const { values, handleChange, errors } = useForm(initialState);


    
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

      const handleNINUpload = (url: File) => {
        console.log(url)
        // NINUrl = url
        setNINUrl(url);
      };

      const handlePassportUpload = (url: File) => {
        setPassportUrl(url);
      };



    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     setLoading(true)


    //     const requestData = {
    //         nin : NINUrl,
    //         passport: passportUrl,
    //         firstName:values.firstName,
    //         lastName:values.lastName,
    //         phone: values.phone,
    //         email:values.email,
    //         marketLocations: locations
    //     }

    //     console.log(requestData)


    //     const phoneNumber = import.meta.env.VITE_AGENT_PHONE; 
        
    //     try {
    //         const response = await API.post('/agents/new', requestData); 
    //         setLoading(false)
    //         setOpen(true)
    //         const errand_id = response.data.data.id
    //         const message = `Hi, my name is ${values.firstName.toUpperCase()} ${values.lastName.toUpperCase()}. I just registered as an agent on ErrandBox. My agent id is ${errand_id}. `; 
    //         setTimeout(() => {
    //             const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    //             window.open(url, '_blank');                
    //         }, 3000);

    //     } catch (err: any) {
    //         console.log(err)
    //         console.log(err.message);
    //         setLoading(false)
    //     }
    // };


      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        setLoading(true);
    
        const formData = new FormData();
    
        if (NINUrl) {
            formData.append('nin', NINUrl);
        } else {
            console.warn('NINUrl is null or undefined');
        }
    
        if (passportUrl) {
            formData.append('passport', passportUrl);
        } else {
            console.warn('passportUrl is null or undefined');
        }
    
        formData.append('firstName', values.firstName);
        formData.append('lastName', values.lastName);
        formData.append('phone', values.phone);
        formData.append('email', values.email);
        formData.append('marketLocations', JSON.stringify(locations));
    
        // Log FormData for debugging

    
        const phoneNumber = import.meta.env.VITE_AGENT_PHONE;
    
        try {
            await API.post('/agents/new', formData);
            setLoading(false);
            setOpen(true);
            const message = `Hi, my name is ${values.firstName.toUpperCase()} ${values.lastName.toUpperCase()}. I just registered as an agent on ErrandBox. `;
            
            const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            console.log('here')
    
        } catch (err: any) {
            console.log(err);
            console.log(err.message);
            setLoading(false);
        }
    };
    
    
    
    


  return (
    <>
    {isLoading && <Loader/>}
    <MainLayout>
        <FormHero/>
        <Container>
            
            <form onSubmit={handleSubmit} >

                <div>
                    <FormTag title="Personal Details" desc="This would help us assign an Errand to you. Ensure all details are correct."/>   

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12  md:px-10 lg:px-20 py-8">
                        <FormInput
                            label={'First name'}
                            type={'text'}
                            name={'firstName'} 
                            value={values.firstName}
                            onChange={handleChange}
                            placeholder={'Enter your first name'}
                            error={errors?.firstName}
                        />                
                        <FormInput
                            label={'Last name'}
                            type={'text'}
                            name={'lastName'} 
                            value={values.lastName}
                            onChange={handleChange}
                            placeholder={'Enter your last name'}
                            error={errors?.lastName}
                        />       
                        <FormInput
                            label={'Address'}
                            type={'text'}
                            name={'address'} 
                            value={values.address}
                            onChange={handleChange}
                            placeholder={'Enter your address'}
                            error={errors?.address}
                        />                
                        <FormInput
                            label={'Phone'}
                            type={'text'}
                            name={'phone'} 
                            value={values.phone}
                            onChange={handleChange}
                            placeholder={'Enter your phone number'}
                            error={errors?.phone}
                        />       
                        <FormInput
                            label={'Email Address'}
                            type={'email'}
                            name={'email'} 
                            value={values.email}
                            onChange={handleChange}
                            placeholder={'Enter your email address'}
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
                                <ImageUploader id="ninUpload" title="NIN" onImageUpload={handleNINUpload}/>
                            </div>
                            <div className="w-full lg:w-[45%]">
                                <ImageUploader id="passportUpload" title="Passport" onImageUpload={handlePassportUpload}/>
                            </div>

                        </div>                                   
                </div>

                <div className="w-full flex justify-center items-center">
                <AuthButton title={'Submit'}/>
                </div>

            </form>
        </Container>

        <BasicModal title={''} openModal={open} handleOk={() => setOpen(false)} handleCancel={() => setOpen(false)}>
                    <div className="flex justify-center items-center flex-col gap-3 py-20">
                        <p>Submitted Successfully</p>
                        <p>Our customer care would reach out to you shortly</p>
                    </div>
                </BasicModal>

    </MainLayout>
    </>
  )
}

export default AgentForm