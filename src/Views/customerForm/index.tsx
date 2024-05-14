import { useState } from "react";
import { FormHero, FormTag } from "../../components/shared";
import FormInput from "../../components/shared/FormInput";
import { AuthButton } from "../../components/shared/button";
import { Container } from "../../components/shared/container";
import useForm from "../../hooks/useForm";
import MainLayout from "../../layout/MainLayout";
import BasicModal from "../../components/shared/modal";
import { Popover } from "antd";
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const initialState = {
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        errandName: "",
        errandType: "",
        itemCount: "",
        itemType: "",
        itemCost: "",
        market_loc:''
    };


const CustomerForm = () => {
    const [orderCount, setOrderCount] = useState<number>(1);
    const [open, setOpen] = useState<boolean>(false);
    const { values, handleChange, errors } = useForm(initialState);

    const [value, setValue] = useState(1);

    const onTypeChange = (e: RadioChangeEvent) => {
        setValue(e.target.value); // Update the state with the selected value
        console.log(e.target)
        handleChange({ // Call handleChange with a synthetic event object
          target: {
            name: 'errandType', // Name of the input field you want to update
            value: e.target.value // Value of the selected radio button
          }
        });
      };
    const onLocChange = (e: RadioChangeEvent) => {
        setValue(e.target.value); // Update the state with the selected value
        console.log(e.target)
        handleChange({ // Call handleChange with a synthetic event object
          target: {
            name: 'market_loc', // Name of the input field you want to update
            value: e.target.value // Value of the selected radio button
          }
        });
      };
      


    const IncreaseOrderCount = () => {
        setOrderCount((prev) => prev + 1);
    };
    const DecreaseOrderCount = () => {
        setOrderCount((prev) => prev - 1);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    



    const OrderForm = () => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 px-5 md:px-10 lg:px-20 py-8 bg-[#f8f8f9]">
                <FormInput
                    label={"Type of Item"}
                    type={"text"}
                    name={"itemType"}
                    value={values.itemType}
                    onChange={handleChange}
                    placeholder={"John"}
                    error={errors?.itemType}
                />
                <FormInput
                    label={"No of Item"}
                    type={"number"}
                    name={"itemCount"}
                    value={values.itemCount}
                    onChange={handleChange}
                    placeholder={"Doe"}
                    error={errors?.itemCount}
                />
                <FormInput
                    label={"Cost of Item"}
                    type={"text"}
                    name={"itemCost"}
                    value={values.itemCost}
                    onChange={handleChange}
                    placeholder={"Doe"}
                    error={errors?.itemCost}
                />

                {
                    orderCount > 1 && 
                    <div className="flex justify-end w-full ">
                        <button
                            type="button"
                            className="font-[500] text-[#052370] font-Int text-[16px]"
                            onClick={DecreaseOrderCount}
                        >
                            Clear List
                        </button>
                    </div>
                }
            </div>
        );
    };

    // Dynamically render multiple OrderForm components based on orderCount
    const orderForms = [];
    for (let i = 0; i < orderCount; i++) {
        orderForms.push(<OrderForm key={i} />);
    }


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
            <Radio.Group onChange={onLocChange} name="market_loc" value={value}>
                {
                    marketOptions?.map((i:any)=>
                        <Radio style={{padding:'.5rem 0', borderBottom:'1px solid #F3EEEE', width:'100%', marginBottom:'.5rem'}} value={i.value}>
                            <div className="">
                                <p className="inline font-Int font-[400]  text-[14px]">{i.label}</p>
                            </div>
                        </Radio>                    
                    )
                }

            </Radio.Group>
        </div>
      );
    const content = (
        <div className='flex flex-col w-[300px]'>
            <Radio.Group onChange={onTypeChange} value={value} name="errandType">
                <Radio style={{padding:'.5rem 0'}} value={'daily-errands'}>
                    <div>
                        <p className="font-Int font-[500] text-[#101928] text-[16px]">Daily Errands</p>
                        <p className="font-Int font-[400] text-[#667185] text-[14px]">Your Agent goes on errands close to your location</p>
                    </div>
                </Radio>
                <Radio style={{padding:'.5rem 0'}} value={'errand-pickup'}>
                    <div>
                        <p className="font-Int font-[500] text-[#101928] text-[16px]">Errand Pickup</p>
                        <p className="font-Int font-[400] text-[#667185] text-[14px]">Your agent goes on errands to any market location in Lagos</p>

                    </div>
                </Radio>
                <Radio style={{padding:'.5rem 0'}} value={'errand-assistant'}>
                    <div>
                        <p className="font-Int font-[500] text-[#101928] text-[16px]">Errand Assistance</p>
                        <p className="font-Int font-[400] text-[#667185] text-[14px]">You are assigned an agent to accompany you to the market</p>
                    </div>
                </Radio>

            </Radio.Group>
        </div>
      );

    return (
        <MainLayout>
            <Container>
                <FormHero />
                <form onSubmit={handleSubmit}>
                    <div>
                        <FormTag
                            title="Personal Details"
                            desc="This would help us assign you to an Agent easily"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 px-5 md:px-10 lg:px-20 py-8">
                            <FormInput
                                label={"First name"}
                                type={"text"}
                                name={"firstName"}
                                value={values.firstName}
                                onChange={handleChange}
                                placeholder={"John"}
                                error={errors?.firstName}
                            />
                            <FormInput
                                label={"Last name"}
                                type={"text"}
                                name={"lastName"}
                                value={values.lastName}
                                onChange={handleChange}
                                placeholder={"Doe"}
                                error={errors?.lastName}
                            />
                            <FormInput
                                label={"Address"}
                                type={"text"}
                                name={"address"}
                                value={values.address}
                                onChange={handleChange}
                                placeholder={"John"}
                                error={errors?.address}
                            />
                            <FormInput
                                label={"Phone"}
                                type={"text"}
                                name={"phone"}
                                value={values.phone}
                                onChange={handleChange}
                                placeholder={"Doe"}
                                error={errors?.phone}
                            />
                        </div>
                    </div>
                    <div>
                        <FormTag
                            title="Errand Details"
                            desc="Tell us what you want to get and we’ll get you and Agent"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 px-5 md:px-10 lg:px-20 py-8">
                            <FormInput
                                label={'Errand name'}
                                type={'text'}
                                name={'errandName'} 
                                value={values.errandName}
                                onChange={handleChange}
                                placeholder={'John'}
                                error={errors?.errandName}
                            />    
                        <Popover content={content} title="Select Your Errand Type" className="errand-type">
                            <div>
                                <FormInput
                                    label={'Errand Type'}
                                    type={'text'}
                                    name={'errandType'} 
                                    value={values.errandType}
                                    onChange={handleChange}
                                    placeholder={'Doe'}
                                    error={errors?.errandType}
                                />                                
                            </div>


                        </Popover>
                        <Popover content={marketcontent} title="Select your Service Area Location" className="errand-type">
                            <div>
                                <FormInput
                                    label={'Locations'}
                                    type={'text'}
                                    name={'market_loc'} 
                                    value={values.market_loc}
                                    onChange={handleChange}
                                    placeholder={'Doe'}
                                    error={errors?.market_loc}
                                /> 
                            </div>


                        </Popover>      

  
                        </div> 
                        {orderForms}
                    </div>



                    <div className="flex justify-end w-full py-10">
                        <button
                            type="button"
                            className="font-[500] text-[#FE5000] font-Int text-[16px]"
                            onClick={IncreaseOrderCount}
                        >
                            Add more Errands Item
                        </button>
                    </div>

                    <div  className="w-full flex justify-center items-center">
                        <div onClick={()=>setOpen(true)}>
                            <AuthButton title={"Submit"} />
                        </div>
                        
                    </div>
                </form>
            </Container>

            <BasicModal title={''} openModal={open} handleOk={()=>setOpen(false)} handleCancel={()=>setOpen(false)}>
                <div className="flex justify-center items-center flex-col gap-3 py-20">
                    <p>Submitted Successfully</p>
                    <p>Our customer care would reach out to you shortly</p>
                </div>
            </BasicModal>
        </MainLayout>
    );
};

export default CustomerForm;


