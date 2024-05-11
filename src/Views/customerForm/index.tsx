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

const CustomerForm = () => {
    const [orderCount, setOrderCount] = useState<number>(1);
    const [open, setOpen] = useState<boolean>(false);

    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
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
    };
    const { values, handleChange, errors } = useForm(initialState);

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


    const content = (
        <div className='flex flex-col w-[300px]'>
            <Radio.Group onChange={onChange} value={value}>
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


