interface FormData {
    name: string;
    email: string;
    telefono: string;
    experiencia: string;
    interes: string[];
    cv: string;
}

interface FormErrors {
    [key: string]: string;
}

export const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
        errors.name = 'Debe ingresar su nombre completo para poder avanzar';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
        errors.name = 'El nombre solo debe contener letras';
    } else if (!/^[\s\S]{0,40}$/.test(formData.name)) {
        errors.name = 'El nombre no puede tener más de 40 carácteres'
    } else if (!/^[\s\S]{8,40}$/.test(formData.name)) {
        errors.name = 'El nombre no puede tener menos de 8 carácteres'
    }

    if (!formData.email.trim()) {
        errors.email = 'Debe ingresar su correo personal para poder avanzar';
    } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(formData.email)) {
        errors.email = 'El email no es válido';
    }

    if (!formData.telefono.trim()) {
        errors.telefono = 'Debe ingresar un telefóno para poder avanzar';
    } else if (!/^([0-9])*$/.test(formData.telefono)) {
        errors.telefono = 'El teléfono solo debe contener números';
    }
    if (!formData.experiencia.trim()) {
        errors.experiencia = 'Debe ingresar su experiencia laboral para poder avanzar';
    } else if (!/^[\s\S]{0,200}$/.test(formData.experiencia)) {
        errors.experiencia = 'La experiencia no puede tener más de 200 carácteres'
    } else if (!/^[\s\S]{20,200}$/.test(formData.experiencia)) {
        errors.experiencia = 'La experiencia no puede tener menos de 20 carácteres'
    } else if (!/^([a-z0-9]+(\/{1}[a-z0-9]+)*)+(?!([/]{2}))$/.test(formData.experiencia)) {
        errors.experiencia = 'El nombre solo debe contener letras, sin carácteres especiales';
    }

    if (!formData.cv.trim()) {
        errors.cv = 'Debe ingresar su Curriculum Vitae para poder avanzar';
    }
    const arrayComoCadena = formData.interes.join(',');
    const expresionRegular = /^\s*$/;
    if (expresionRegular.test(arrayComoCadena)) {
        errors.interes = 'Debe escoger mínimo 1 puesto de intéres'
    }


    return errors;
};