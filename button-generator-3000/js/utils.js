export const createElement = (template) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;

    return newElement.firstChild;
};

export const prepareFormData = (formElements, settings) => {
    formElements.forEach(element => {
        const { name, value, type, checked } = element;
        if (name === 'displayParams' || name === 'positionParams') {
            settings[name].push(value);
        }

        if (type === 'checkbox' && checked) {
            settings[name].push(value);
        }

        if (name === 'title') {
            settings[name] = value;
        }
    });

    return settings;
};
