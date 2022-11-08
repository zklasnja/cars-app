import React from 'react';

export default function AddCarComponent({handleResetForm, handlePreviewForm}){

    return (
        <div>
            <button onClick={handleResetForm} type="button">Reset Form</button>
            <button onClick={handlePreviewForm} type="button">Preview Form</button>
        </div>
    )
}