import React from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import { ColourOption, colourOptions } from '../../Services/Data';
import { StylesConfig } from 'react-select';
import FormStyles from '../../../styles/Main.module.css'

interface FormFieldsProps {
    formData: {
        name: string;
        email: string;
        telefono: string;
        experiencia: string;
        interes: string[];
        cv: string;
    };
    errors: { [key: string]: string };
    handleChange: (name: string, value: string) => void;
    handleSelectChange: (values: string[]) => void;
}

const colourStyles: StylesConfig<ColourOption, true> = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : undefined,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled
                    ? isSelected
                        ? data.color
                        : color.alpha(0.3).css()
                    : undefined,
            },
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};


const FormFields: React.FC<FormFieldsProps> = ({
    formData,
    errors,
    handleChange,
    handleSelectChange,
}) => {
    return (
        <>
            <div className={FormStyles.ContainerName}>
                <div>
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ingrese Nombre Completo"
                        id="nombre"
                        value={formData.name}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>
            </div>
            <div className={FormStyles.ContainerEmailTelefono}>
                <div className={FormStyles.ContainerEmail}>
                    <label htmlFor="correo">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Ingrese Correo Electrónico"
                        id="correo"
                        value={formData.email}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>

                <div className={FormStyles.ContainerTelefono}>
                    <label htmlFor="telefono">Número de Teléfono</label>
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Ingrese Número Telefónico"
                        id="numero"
                        value={formData.telefono}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                    {errors.telefono && <span style={{ color: 'red' }}>{errors.telefono}</span>}
                </div>
            </div>

            <div>
                <label htmlFor="experiencia">Experiencia Laboral</label>
                <textarea
                    name="experiencia"
                    placeholder="Ingrese Experiencia Laboral"
                    id="expelaboral"
                    value={formData.experiencia}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                {errors.experiencia && <span style={{ color: 'red' }}>{errors.experiencia}</span>}
            </div>

            <div>
                <label htmlFor="interes">Puestos de interés</label>
                <Select
                    name="interes"
                    placeholder="Seleccione una opción"
                    id="interes"
                    closeMenuOnSelect={false}
                    defaultValue={[colourOptions[0], colourOptions[1]]}
                    isMulti
                    options={colourOptions}
                    styles={colourStyles}
                    value={colourOptions.filter((option) => formData.interes.includes(option.value))}
                    onChange={(values) => handleSelectChange(values.map((option) => option.value))}
                />
                {errors.interes && <span style={{ color: 'red' }}>{errors.interes}</span>}
            </div>

            <div>
                <label htmlFor="InputFile">De click en el recuadro para cargar su CV</label>
                <input
                    className={FormStyles.InputFile}
                    type="file"
                    name="cv"
                    placeholder="Cargar Curriculum vitae"
                    id="cv"
                    value={formData.cv}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                {errors.cv && <span style={{ color: 'red' }}>{errors.cv}</span>}

            </div>
        </>
    );
};

export default FormFields;