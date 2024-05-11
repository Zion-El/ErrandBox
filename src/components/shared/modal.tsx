import { Modal } from 'antd';

interface BasicModalProps {
    children: React.ReactNode;
    title: string;
    openModal: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({ children, title, openModal, handleOk, handleCancel }) => {
    return (
        <>
            <Modal className='basic-modal' title={title} open={openModal} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    );
};

export default BasicModal;
