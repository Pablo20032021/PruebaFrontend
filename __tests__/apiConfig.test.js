const apiConfig = {
    baseURL: 'http://localhost:5000',
};

describe('apiConfig', () => {
    test('debe tener una propiedad baseURL con el valor correcto', () => {
        expect(apiConfig).toHaveProperty('baseURL');
        expect(apiConfig.baseURL).toBe('http://localhost:5000');
    });
});