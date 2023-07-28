import React, { useState } from 'react';
import FormFields from '../Fields/FormFields';
import axios from 'axios';
import { ColourOption } from '../../Services/Data';
import { ActionMeta } from 'react-select';
import FormStyles from '../../../styles/Main.module.css';
import { FormData, validateForm } from '../../Utils/FormsValidation';
import apiConfig from '../../../src/Services/apiConfig';

const Form: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        telefono: '',
        experiencia: '',
        interes: [],
        cv: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formErrors = validateForm(formData);

        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await axios.post(`${apiConfig.baseURL}/users`, formData); 
                console.log(response.data);
                setSuccessMessage('¡Formulario enviado con éxito!');
                setFormData({ name: '', email: '', telefono: '', experiencia: '', interes: [], cv: '' });
            } catch (error) {
                console.error('Error:', error);
                setErrorMessage('¡Algo ha fallado!');
                setFormData({ name: '', email: '', telefono: '', experiencia: '', interes: [], cv: '' });
            }
        }

        setErrors(formErrors);
    };

    const handleChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (
        newValue: ColourOption[] | null,
        actionMeta: ActionMeta<ColourOption>
    ) => {
        setFormData({ ...formData, interes: newValue || [] });
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit} className={FormStyles.formulario}>
                <FormFields
                    formData={formData}
                    errors={errors}
                    handleChange={handleChange}
                    handleSelectChange={handleSelectChange}
                />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default Form;