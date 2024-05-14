import React, { useState } from 'react';

interface uploadProps{
  id:string;
  title?:string
}

const ImageUploader: React.FC<uploadProps> = ({id, title}) => {
  const [image, setImage] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImage(file);
    } else {
      alert('Please drop an image file.');
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImage(file);
    } else {
      alert('Please select an image file.');
    }
  };

  const handleImage = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result as string);
    };
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        width: '100%',
        height: 300,
        border: '2px dashed #D0D5DD',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      className='rounded-xl'
    >
      {image ? (
        <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      ) : (
        <div className='space-y-8'>

            <div>
                <p className='font-Int font-[400] text-[14px] text-[#475367] text-center'><span className='font-Int font-[600]  text-[16px] text-[#FE5000]'>Click to upload your {title}</span> or drag and drop</p>
                <p className='font-Int font-[400] text-[12px] text-[#98A2B3] text-center'>DOCX, PDF JPG or (max. 516MB)</p>
            </div>

            <div className='flex w-full gap-4 justify-center items-center'>
                <div className='w-full h-[1px] bg-[#F0F2F5]'></div>
                <span>OR</span>
                <div className='w-full h-[1px] bg-[#F0F2F5]'></div>
            </div>
            
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
            id={id}
          />
          <div className='w-full flex justify-center '>
            <label htmlFor={id} className='bg-[#FE5000] text-[#fff] rounded-lg font-[500] px-8 py-2'>Browse File</label>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default ImageUploader;