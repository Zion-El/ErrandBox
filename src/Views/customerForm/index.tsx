import { useState, useEffect, FC } from "react";
import { FormHero, FormTag } from "../../components/shared";
import FormInput from "../../components/shared/FormInput";
import { AuthButton } from "../../components/shared/button";
import { Container } from "../../components/shared/container";
import useForm from "../../hooks/useForm";
import MainLayout from "../../layout/MainLayout";
import BasicModal from "../../components/shared/modal";
import { Popover, Radio } from "antd";
import type { RadioChangeEvent } from 'antd';
import API from "../../utils/api";
import Loader from "../../components/shared/Loader";

interface ErrandItemProps {
    name: string;
    quantity: string;
    amount: number;
}
interface marketListProps {
    name: string;
    id: string;
}

const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
};

const initialErrand = {
    errandName: "",
    market_loc: "",
    errandType: "",
};

const CustomerForm: FC = () => {
    const [errandList, setErrandList] = useState<ErrandItemProps[]>([
        { name: "", quantity: "", amount: 0 },
    ]);
    const [marketList, setMarketList] = useState<marketListProps[]>();
    const [open, setOpen] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const { values, handleChange, errors } = useForm(initialState);
    const { values: errands, handleChange: handleErrandChange, errors: errandErrors } = useForm(initialErrand);

    const onTypeChange = (e: RadioChangeEvent) => {
        handleErrandChange({
            target: {
                name: 'errandType',
                value: e.target.value,
            },
        });
    };

    const onLocChange = (e: RadioChangeEvent) => {
        handleErrandChange({
            target: {
                name: 'market_loc',
                value: e.target.value,
            },
        });
    };

    const IncreaseOrderCount = () => {
        setErrandList([...errandList, { name: "", quantity: "", amount: 0 }]);
    };

    const DecreaseOrderCount = (index:any) => {
            setErrandList((prevItems) => prevItems.filter((_, i:any) => i !== index));

    };

    const handleItemChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updatedErrandList = [...errandList];
        updatedErrandList[index] = { ...updatedErrandList[index], [name]: (name==='amount'? Number(value): value) };
        setErrandList(updatedErrandList);
    };


    useEffect(()=>{
        const getMarket = async() =>{
            try {
                const response = await API.get('/markets'); 
                const market = response.data.data
                    setMarketList(market)

                console.log(response);
            } catch (err: any) {
                console.log(err)
                console.log(err.message);
            }            
        }

        getMarket()

    }, [])



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true)


        const requestData = {
            firstName: values.firstName,
            lastName: values.lastName,
            address: values.address,
            phone: values.phone,
            errand: {
                name: errands.errandName,
                market: errands.market_loc,
                errandList: errandList,
                type: errands.errandType,
            },
        };

        console.log(requestData)


        const phoneNumber = import.meta.env.VITE_CUSTOMER_PHONE; 
        
        try {
            const response = await API.post('/errands/order', requestData); 
            setLoading(false)
            setOpen(true)
            const errand_id = response.data.data.id
            const message = `Hi, my name is ${values.firstName.toUpperCase()} ${values.lastName.toUpperCase()}. I just place an errand order on ErrandBox with errand id - ${errand_id}. `; 
            setTimeout(() => {
                const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');                
            }, 3000);

        } catch (err: any) {
            console.log(err)
            console.log(err.message);
            setLoading(false)
        }
    };

    const marketOptions = marketList;

    const marketContent = (
        <div className='flex flex-col w-[300px]'>
            <Radio.Group onChange={onLocChange} name="market_loc" value={errands.market_loc}>
                {marketOptions?.map((i, id) => (
                    <Radio key={id} style={{ padding: '.5rem 0', borderBottom: '1px solid #F3EEEE', width: '100%', marginBottom: '.5rem' }} value={i.id}>
                        <div>
                            <p className="inline font-Int font-[400] text-[14px]">{i.name}</p>
                        </div>
                    </Radio>
                ))}
            </Radio.Group>
        </div>
    );

    const content = (
        <div className='flex flex-col w-[300px]'>
            <Radio.Group onChange={onTypeChange} value={errands.errandType} name="errandType">
                <Radio style={{ padding: '.5rem 0' }} value={'daily-pick'}>
                    <div>
                        <p className="font-Int font-[500] text-[#101928] text-[16px]">Quick Errands</p>
                        <p className="font-Int font-[400] text-[#667185] text-[14px]">Your Agent goes on errands close to your location</p>
                    </div>
                </Radio>
                <Radio style={{ padding: '.5rem 0' }} value={'market-runs'}>
                    <div>
                        <p className="font-Int font-[500] text-[#101928] text-[16px]">Errand Pickup</p>
                        <p className="font-Int font-[400] text-[#667185] text-[14px]">Your agent goes on errands to any market location in Lagos</p>
                    </div>
                </Radio>
                <Radio style={{ padding: '.5rem 0' }} value={'follow-Agent'}>
                    <div>
                        <p className="font-Int font-[500] text-[#101928] text-[16px]">Errand Assistance</p>
                        <p className="font-Int font-[400] text-[#667185] text-[14px]">You are assigned an agent to accompany you to the market</p>
                    </div>
                </Radio>
            </Radio.Group>
        </div>
    );

    return (
        <>
            {isLoading && <Loader/>}
            <MainLayout>
                <FormHero />
                <Container>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <FormTag
                                title="Personal Details"
                                desc="This would help us assign you to an Agent easily"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 md:px-10 lg:px-20 py-8">
                                <FormInput
                                    label={"First name"}
                                    type={"text"}
                                    name={"firstName"}
                                    value={values.firstName}
                                    onChange={handleChange}
                                    placeholder={"Enter your first name"}
                                    error={errors?.firstName}
                                />
                                <FormInput
                                    label={"Last name"}
                                    type={"text"}
                                    name={"lastName"}
                                    value={values.lastName}
                                    onChange={handleChange}
                                    placeholder={"Enter your last name"}
                                    error={errors?.lastName}
                                />
                                <FormInput
                                    label={"Address"}
                                    type={"text"}
                                    name={"address"}
                                    value={values.address}
                                    onChange={handleChange}
                                    placeholder={"Enter your address"}
                                    error={errors?.address}
                                />
                                <FormInput
                                    label={"Phone"}
                                    type={"text"}
                                    name={"phone"}
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder={"Enter your phone number"}
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 md:px-10 lg:px-20 py-8">
                                <FormInput
                                    label={'Errand name'}
                                    type={'text'}
                                    name={'errandName'}
                                    value={errands.errandName}
                                    onChange={handleErrandChange}
                                    placeholder={'Enter errand name'}
                                    error={errandErrors?.errandName}
                                />
                                <Popover content={content} title="Select Your Errand Type" className="errand-type">
                                    <div>
                                        <FormInput
                                            label={'Errand Type'}
                                            type={'text'}
                                            name={'errandType'}
                                            value={errands.errandType}
                                            onChange={handleErrandChange}
                                            placeholder={'Select errand type'}
                                            error={errandErrors?.errandType}
                                        />
                                    </div>
                                </Popover>
                                <Popover content={marketContent} title="Select your Service Area Location" className="errand-type">
                                    <div>
                                        <FormInput
                                            label={'Locations'}
                                            type={'text'}
                                            name={'market_loc'}
                                            value={errands.market_loc}
                                            onChange={handleErrandChange}
                                            placeholder={'Select market location'}
                                            error={errandErrors?.market_loc}
                                        />
                                    </div>
                                </Popover>
                            </div>

                            {errandList.map((item, index) => 
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 px-5 md:px-10 lg:px-20 py-8 bg-[#f8f8f9]">
                                            <FormInput
                                                label={"Type of Item"}
                                                type={"text"}
                                                name={"name"}
                                                value={item.name}
                                                onChange={(e) => handleItemChange(index, e)}
                                                placeholder={"Enter item type"}
                                                error={errors?.itemName}
                                            />
                                            <FormInput
                                                label={"No of Item"}
                                                type={"number"}
                                                name={"quantity"}
                                                value={item.quantity}
                                                onChange={(e) => handleItemChange(index, e)}
                                                placeholder={"Enter number of item"}
                                                error={errors?.quantity}
                                            />
                                            <FormInput
                                                label={"Cost of Item"}
                                                type={"text"}
                                                name={"amount"}
                                                value={Number(item.amount)}
                                                onChange={(e) => handleItemChange(index, e)}
                                                placeholder={"Enter cost of item"}
                                                error={errors?.amount}
                                            />
                            
                                            {errandList.length > 1 && (
                                                <div className="flex justify-end w-full ">
                                                    <button
                                                        type="button"
                                                        className="font-[500] text-[#052370] font-Int text-[16px]"
                                                        onClick={()=>DecreaseOrderCount(index)}
                                                    >
                                                        Clear List
                                                    </button>
                                                </div>
                                            )}
                                        </div>
    
                            )}
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

                        <div className="w-full flex justify-center items-center">
                            {/* <div onClick={() => setOpen(true)}> */}
                                <AuthButton title={"Submit"} />
                            {/* </div> */}
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

    );
};

export default CustomerForm;
