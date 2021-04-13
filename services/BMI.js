const service = {
    BMI_Service: {
        BMI_Port: {
            calculateBMI: function ({ weight, height }) {
                var year = new Date().getFullYear();
                var n = (weight) / (height * height);
                return { bmi: n, year: year };
            }
        }
    }
}

module.exports = service;