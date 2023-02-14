const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajvInstance = new Ajv({ allErrors: true });
addFormats(ajvInstance);

const billSchema = {
    type: 'object',
    properties: {
      patientName: { type: 'string', minLength: 3 },
      patientAddress: { type: 'string', minLength: 5 },
      hospitalName: { type: 'string', minLength: 3 },
      dateOfService: { type: 'string', format: 'date' },
      billAmount: { type: 'number' },
    },
    required: ['patientName', 'patientAddress', 'hospitalName', 'dateOfService','billAmount'],
    "additionalProperties": false,
};

module.exports = ajvInstance.compile(billSchema);