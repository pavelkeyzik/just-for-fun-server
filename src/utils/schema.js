const fs = require('fs');
const path = require('path');

function loadTypeSchema(type) {
  return new Promise((resolve, reject) => {
    const pathToSchema = path.join(
      process.cwd(),
      `src/types/${type}/${type}.gql`,
    );
    fs.readFile(pathToSchema, { encoding: 'utf-8' }, (err, schema) => {
      if (err) {
        return reject(err);
      }

      resolve(schema);
    });
  });
}

module.exports = {
  loadTypeSchema,
};
